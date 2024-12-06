package net.minecraft.src;

import net.lax1dude.eaglercraft.EaglerAdapter;

import java.io.IOException;
import java.io.InputStream;

public class TexturePackDefault extends TexturePackImplementation {
    public TexturePackDefault() {
        super("default", "Default", null);
    }

    /**
     * Load texture pack description from /pack.txt file in the texture pack
     */
    protected void loadDescription() {
        this.firstDescriptionLine = "The default look of Minecraft";
    }

    public boolean func_98140_c(String par1Str) {
        return EaglerAdapter.loadResource(par1Str) != null;
    }

    public boolean isCompatible() {
        return true;
    }

    protected InputStream func_98139_b(String par1Str) throws IOException {
        return EaglerAdapter.loadResource(par1Str);
    }

    @Override
    public byte[] getResourceAsBytes(String par1Str) {
        return EaglerAdapter.loadResourceBytes(par1Str);
    }
}
