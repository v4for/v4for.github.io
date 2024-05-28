package prc.etcherfx.precision;

import net.lax1dude.eaglercraft.EaglerAdapter;
import net.lax1dude.eaglercraft.TextureLocation;
import net.minecraft.client.Minecraft;
import net.minecraft.src.FontRenderer;
import net.minecraft.src.GuiButton;

public class GuiButtonPrc extends GuiButton {
    public GuiButtonPrc(int par1, int par2, int par3, String par4Str) {
        super(par1, par2, par3, 200, 20, par4Str);
    }

    private static final TextureLocation tex_gui = new TextureLocation("/precision/gui.png");

    /**
     * Draws this button to the screen.
     */
    public void drawButton(Minecraft par1Minecraft, int par2, int par3) {
        if (this.drawButton) {
            FontRenderer var4 = par1Minecraft.fontRenderer;
            tex_gui.bindTexture();
            EaglerAdapter.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
            field_82253_i = par2 >= this.xPosition && par3 >= this.yPosition && par2 < this.xPosition + this.width
                    && par3 < this.yPosition + this.height;
            int var5 = getHoverState(field_82253_i);
            this.drawTexturedModalRect(this.xPosition, this.yPosition, 0, 46 + var5 * 20, this.width / 2, this.height);
            this.drawTexturedModalRect(this.xPosition + this.width / 2, this.yPosition, 200 - this.width / 2,
                    46 + var5 * 20, this.width / 2, this.height);
            this.mouseDragged(par1Minecraft, par2, par3);
            int var6 = 14737632;

            if (!enabled) {
                var6 = -6250336;
            } else if (field_82253_i) {
                var6 = 14737632;
            }

            this.drawCenteredString(var4, this.displayString, this.xPosition + this.width / 2,
                    this.yPosition + (this.height - 8) / 2, var6);
        }
    }
}
