package net.lax1dude.eaglercraft.sp.ipc;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;

public interface IPCPacketBase {

    void deserialize(DataInput bin) throws IOException;

    void serialize(DataOutput bin) throws IOException;

    int id();

    int size();

    static int strLen(String s) {
        int strlen = s.length();
        int utflen = 2;
        int c;

        for (int i = 0; i < strlen; ++i) {
            c = s.charAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                ++utflen;
            } else if (c > 0x07FF) {
                utflen += 3;
            } else {
                utflen += 2;
            }
        }

        return utflen;
    }

}
