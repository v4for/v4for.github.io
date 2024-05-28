package net.minecraft.src;

import java.util.Objects;

class LongHashMapEntry {
    /**
     * the key as a long (for playerInstances it is the x in the most significant 32
     * bits and then y)
     */
    final long key;

    /**
     * the value held by the hash at the specified key
     */
    Object value;

    /**
     * the next hashentry in the table
     */
    LongHashMapEntry nextEntry;
    final int hash;

    LongHashMapEntry(int par1, long par2, Object par4Obj, LongHashMapEntry par5LongHashMapEntry) {
        this.value = par4Obj;
        this.nextEntry = par5LongHashMapEntry;
        this.key = par2;
        this.hash = par1;
    }

    public final long getKey() {
        return this.key;
    }

    public final Object getValue() {
        return this.value;
    }

    public final boolean equals(Object par1Obj) {
        if (!(par1Obj instanceof LongHashMapEntry)) {
            return false;
        } else {
            LongHashMapEntry var2 = (LongHashMapEntry) par1Obj;
            Long var3 = Long.valueOf(this.getKey());
            Long var4 = Long.valueOf(var2.getKey());

            if (Objects.equals(var3, var4)) {
                Object var5 = this.getValue();
                Object var6 = var2.getValue();

                return Objects.equals(var5, var6);
            }

            return false;
        }
    }

    public final int hashCode() {
        return LongHashMap.getHashCode(this.key);
    }

    public final String toString() {
        return this.getKey() + "=" + this.getValue();
    }
}
