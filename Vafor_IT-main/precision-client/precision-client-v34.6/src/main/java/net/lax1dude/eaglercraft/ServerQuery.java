package net.lax1dude.eaglercraft;

import net.lax1dude.eaglercraft.adapter.EaglerAdapterImpl2.RateLimit;
import org.json.JSONObject;

public interface ServerQuery {

    long defaultTimeout = 10000L;

    class QueryResponse {
        public final String responseType;
        private final Object responseData;
        public final String serverVersion;
        public final String serverBrand;
        public final String serverName;
        public final long serverTime;
        public final long clientTime;
        public final boolean serverCracked;
        public final RateLimit rateLimitStatus;
        public final boolean rateLimitIsTCP;
        public final long ping;

        public QueryResponse(JSONObject obj, long ping) {
            this.responseType = obj.getString("type").toLowerCase();
            this.ping = ping;
            if (this.responseType.equals("blocked") || this.responseType.equals("locked")) {
                this.responseData = null;
                this.serverVersion = "Unknown";
                this.serverBrand = "Unknown";
                this.serverName = "Unknown";
                this.serverTime = 0L;
                this.clientTime = System.currentTimeMillis();
                this.serverCracked = false;
                this.rateLimitStatus = this.responseType.equals("locked") ? RateLimit.LOCKED : RateLimit.BLOCKED;
                this.rateLimitIsTCP = false;
            } else {
                this.responseData = obj.get("data");
                this.serverVersion = obj.getString("vers");
                this.serverBrand = obj.getString("brand");
                this.serverName = obj.getString("name");
                this.serverTime = obj.getLong("time");
                this.clientTime = System.currentTimeMillis();
                this.serverCracked = obj.optBoolean("cracked", false);
                this.rateLimitStatus = null;
                this.rateLimitIsTCP = false;
            }
        }

        public QueryResponse(boolean lockedNotBlocked, long ping) {
            this.ping = ping;
            this.responseType = lockedNotBlocked ? "locked" : "blocked";
            this.responseData = null;
            this.serverVersion = "Unknown";
            this.serverBrand = "Unknown";
            this.serverName = "Unknown";
            this.serverTime = 0L;
            this.clientTime = System.currentTimeMillis();
            this.serverCracked = false;
            this.rateLimitStatus = lockedNotBlocked ? RateLimit.LOCKED : RateLimit.BLOCKED;
            this.rateLimitIsTCP = true;
        }

        public boolean isResponseString() {
            return responseData instanceof String;
        }

        public boolean isResponseJSON() {
            return responseData instanceof JSONObject;
        }

        public String getResponseString() {
            return (String) responseData;
        }

        public JSONObject getResponseJSON() {
            return (JSONObject) responseData;
        }
    }

    boolean isQueryOpen();

    void close();

    void send(String str);

    default void send(JSONObject obj) {
        send(obj.toString());
    }

    int responseAvailable();

    int responseBinaryAvailable();

    QueryResponse getResponse();

    byte[] getBinaryResponse();

    // normally I wouldn't resort to race conditions but TeaVM has no
    // java.util.concurrent classes for semaphore-like behavior

    default boolean awaitResponseAvailable(long timeout) {
        long start = System.currentTimeMillis();
        while (isQueryOpen() && responseAvailable() <= 0 && (timeout <= 0L || System.currentTimeMillis() - start < timeout)) {
            try {
                Thread.sleep(0L, 250000);
            } catch (InterruptedException e) {
            }
        }
        return responseAvailable() > 0;
    }

    default boolean awaitResponseAvailable() {
        return awaitResponseAvailable(defaultTimeout);
    }

    default boolean awaitResponseBinaryAvailable(long timeout) {
        long start = System.currentTimeMillis();
        while (isQueryOpen() && responseBinaryAvailable() <= 0 && (timeout <= 0L || System.currentTimeMillis() - start < timeout)) {
            try {
                Thread.sleep(0L, 250000);
            } catch (InterruptedException e) {
            }
        }
        return responseBinaryAvailable() > 0;
    }

    default boolean awaitResponseBinaryAvailable() {
        return awaitResponseBinaryAvailable(defaultTimeout);
    }

    default QueryResponse awaitResponse(long timeout) {
        return awaitResponseAvailable(timeout) ? getResponse() : null;
    }

    default QueryResponse awaitResponse() {
        return awaitResponseAvailable() ? getResponse() : null;
    }

    default byte[] awaitResponseBinary(long timeout) {
        return awaitResponseBinaryAvailable(timeout) ? getBinaryResponse() : null;
    }

    default byte[] awaitResponseBinary() {
        return awaitResponseBinaryAvailable() ? getBinaryResponse() : null;
    }

}
