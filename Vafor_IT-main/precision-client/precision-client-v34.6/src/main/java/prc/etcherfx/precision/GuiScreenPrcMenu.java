package prc.etcherfx.precision;

import net.minecraft.src.GuiButton;
import net.minecraft.src.GuiScreen;
import net.minecraft.src.GuiSmallButton;
import net.minecraft.src.StringTranslate;

public class GuiScreenPrcMenu extends GuiScreen {

    /**
     * A reference to the screen object that created this. Used for navigating
     * between screens.
     */
    private final GuiScreen parentScreen;
    /**
     * The title string that is displayed in the top-center of the screen.
     */
    protected String screenTitle = "Precision Menu";

    public GuiScreenPrcMenu(GuiScreen par1GuiScreen) {
        parentScreen = par1GuiScreen;
    }


    /**
     * Adds the buttons (and other controls) to the screen in question.
     */
    public void initGui() {
        StringTranslate var1 = StringTranslate.getInstance();
        screenTitle = var1.translateKey("prcmenu.title");
        byte var2 = -16;
        this.buttonList.add(new GuiButton(101, this.width / 2 - 50, this.height / 4 + 48 + var2, 98, 20, var1.translateKey("prcmenu.mods")));
        this.buttonList.add(new GuiButton(102, this.width / 2 - 50, this.height / 4 + 72 + var2, 98, 20, var1.translateKey("prcmenu.options")));
        this.buttonList.add(new GuiSmallButton(200, this.width / 2 - 75, this.height / 4 + 120, var1.translateKey("gui.done")));
    }

    protected void actionPerformed(GuiButton par1GuiButton) {
        if (par1GuiButton.enabled) {
            if (par1GuiButton.id == 101) {
                mc.displayGuiScreen(new GuiScreenMods(this));
            }
            if (par1GuiButton.id == 102) {
                mc.displayGuiScreen(new GuiScreenOptions(this, mc.gameSettings));
            }
            if (par1GuiButton.id == 200) {
                mc.displayGuiScreen(parentScreen);
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
