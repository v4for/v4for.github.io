package net.lax1dude.eaglercraft.sp;

public interface VFSIterator {

    class BreakLoop extends RuntimeException {
        public BreakLoop() {
            super("iterator loop break request");
        }
    }

    default void end() {
        throw new BreakLoop();
    }

    void next(VIteratorFile entry);

}
