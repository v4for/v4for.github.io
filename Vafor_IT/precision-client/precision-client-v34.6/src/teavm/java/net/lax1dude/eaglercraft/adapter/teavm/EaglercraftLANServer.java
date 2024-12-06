package net.lax1dude.eaglercraft.adapter.teavm;

import org.teavm.jso.JSFunctor;
import org.teavm.jso.JSObject;
import org.teavm.jso.typedarrays.ArrayBuffer;

public interface EaglercraftLANServer extends JSObject {

    int PEERSTATE_FAILED = 0;
    int PEERSTATE_SUCCESS = 1;
    int PEERSTATE_LOADING = 2;

    boolean LANServerSupported();

    void initializeServer();

    void setICEServers(String[] urls);

    void setICECandidateHandler(ICECandidateHandler cb);

    void setDescriptionHandler(DescriptionHandler cb);

    void setRemoteClientDataChannelHandler(ClientSignalHandler cb);

    void setRemoteClientDisconnectHandler(ClientSignalHandler cb);

    void setRemoteClientPacketHandler(PeerPacketHandler cb);

    void sendPacketToRemoteClient(String peerId, ArrayBuffer buffer);

    void resetPeerStates();

    int getPeerState();

    int getPeerStateConnect();

    int getPeerStateInitial();

    int getPeerStateDesc();

    int getPeerStateIce();

    void signalRemoteConnect(String peerId);

    void signalRemoteDescription(String peerId, String descJSON);

    void signalRemoteICECandidate(String peerId, String candidate);

    void signalRemoteDisconnect(String peerId);

    int countPeers();

    @JSFunctor
    interface ICECandidateHandler extends JSObject {
        void call(String peerId, String candidate);
    }

    @JSFunctor
    interface DescriptionHandler extends JSObject {
        void call(String peerId, String candidate);
    }

    @JSFunctor
    interface ClientSignalHandler extends JSObject {
        void call(String peerId);
    }

    @JSFunctor
    interface PeerPacketHandler extends JSObject {
        void call(String peerId, ArrayBuffer buffer);
    }

}
