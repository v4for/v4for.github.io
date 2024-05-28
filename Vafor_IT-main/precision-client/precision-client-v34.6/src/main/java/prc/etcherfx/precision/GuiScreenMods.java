package prc.etcherfx.precision;

import net.minecraft.src.GuiButton;
import net.minecraft.src.GuiScreen;
import net.minecraft.src.GuiSmallButton;
import net.minecraft.src.StringTranslate;
import prc.etcherfx.precision.mods.GuiScreenFullbrightOptions;
import prc.etcherfx.precision.mods.GuiScreenKeystrokesOptions;

public class GuiScreenMods extends GuiScreen {
    /**
     * A reference to the screen object that created this. Used for navigating
     * between screens.
     */
    private final GuiScreen parentScreen;
    /**
     * The title string that is displayed in the top-center of the screen.
     */
    protected String screenTitle = "Mods";

    public GuiScreenMods(GuiScreen par1GuiScreen) {
        this.parentScreen = par1GuiScreen;
    }

    /**
     * Adds the buttons (and other controls) to the screen in question.
     */
    public void initGui() {
        StringTranslate var1 = StringTranslate.getInstance();
        int var2 = 0;
        screenTitle = var1.translateKey("prcmenu.mods.title");
        this.buttonList.add(new GuiButton(101, width / 2 - 152, height / 6 - 12, 98, 20, var1.translateKey("prcmenu.mods.keyStrokes")));
        this.buttonList.add(new GuiButton(102, width / 2 - 50, height / 6 - 12, 98, 20, var1.translateKey("prcmenu.mods.fullBright")));
        //this.buttonList.add(new GuiButton(103, width / 2 + 52, height / 6 - 12, 98, 20, var1.translateKey("prcmenu.mods.zoom")));
        this.buttonList.add(new GuiSmallButton(200, this.width / 2 - 75, this.height / 4 + 120, var1.translateKey("gui.done")));
    }

    /**
     * Fired when a control is clicked. This is the equivalent of
     * ActionListener.actionPerformed(ActionEvent e).
     */
    protected void actionPerformed(GuiButton par1GuiButton) {
        if (par1GuiButton.enabled) {
            if (par1GuiButton.id == 101) {
                this.mc.displayGuiScreen(new GuiScreenKeystrokesOptions(this, this.mc.gameSettings));
            }
            if (par1GuiButton.id == 102) {
                this.mc.displayGuiScreen(new GuiScreenFullbrightOptions(this, this.mc.gameSettings));
            }
            if (par1GuiButton.id == 200) {
                this.mc.displayGuiScreen(parentScreen);
            }
        }
    }

    /**
     * Draws the screen and all the components in it.
     */
    public void drawScreen(int par1, int par2, float par3) {
        this.drawDefaultBackground();
        this.drawCenteredString(this.fontRenderer, this.screenTitle, this.width / 2, 15, 16777215);
        super.drawScreen(par1, par2, par3);
    }
}
