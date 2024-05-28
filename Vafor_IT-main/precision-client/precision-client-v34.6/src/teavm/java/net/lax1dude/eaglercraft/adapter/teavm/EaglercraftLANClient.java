package net.lax1dude.eaglercraft.adapter.teavm;

import org.teavm.jso.JSFunctor;
import org.teavm.jso.JSObject;
import org.teavm.jso.typedarrays.ArrayBuffer;

public interface EaglercraftLANClient extends JSObject {

    int READYSTATE_INIT_FAILED = -2;
    int READYSTATE_FAILED = -1;
    int READYSTATE_DISCONNECTED = 0;
    int READYSTATE_CONNECTING = 1;
    int READYSTATE_CONNECTED = 2;

    boolean LANClientSupported();

    void initializeClient();

    void setICEServers(String[] urls);

    void setICECandidateHandler(ICECandidateHandler callback);

    void setDescriptionHandler(DescriptionHandler callback);

    void setRemoteDataChannelHandler(ClientSignalHandler cb);

    void setRemoteDisconnectHandler(ClientSignalHandler cb);

    void setRemotePacketHandler(RemotePacketHandler cb);

    int getReadyState();

    void sendPacketToServer(ArrayBuffer buffer);

    void signalRemoteConnect();

    void signalRemoteDescription(String descJSON);

    void signalRemoteICECandidate(String candidate);

    void signalRemoteDisconnect(boolean quiet);

    @JSFunctor
    interface ICECandidateHandler extends JSObject {
        void call(String candidate);
    }

    @JSFunctor
    interface DescriptionHandler extends JSObject {
        void call(String description);
    }

    @JSFunctor
    interface ClientSignalHandler extends JSObject {
        void call();
    }

    @JSFunctor
    interface RemotePacketHandler extends JSObject {
        void call(ArrayBuffer buffer);
    }

}
