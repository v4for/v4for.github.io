package prc.etcherfx.precision.mods;

import net.minecraft.src.*;

import java.util.Objects;

public class GuiScreenFullbrightOptions extends GuiScreen {
    /**
     * An array of options that can be changed directly from the options GUI.
     */
    private static final EnumOptions[] Options = new EnumOptions[]{EnumOptions.FULLBRIGHT};

    /**
     * A reference to the screen object that created this. Used for navigating
     * between screens.
     */
    private final GuiScreen parentScreen;
    private final GameSettings options;
    /**
     * The title string that is displayed in the top-center of the screen.
     */
    protected String screenTitle = "Fullbright Options";

    public GuiScreenFullbrightOptions(GuiScreen par1GuiScreen, GameSettings par2GameSettings) {
        parentScreen = par1GuiScreen;
        options = par2GameSettings;
    }

    /**
     * Adds the buttons (and other controls) to the screen in question.
     */
    public void initGui() {
        StringTranslate var1 = StringTranslate.getInstance();
        int var2 = 0;
        screenTitle = var1.translateKey("prcmenu.mods.fullBrightOptions.title");
        EnumOptions[] var3 = Options;
        int var4 = var3.length;
        for (EnumOptions var6 : var3) {
            GuiSmallButton var7 = new GuiSmallButton(var6.returnEnumOrdinal(), width / 2 - 155 + var2 % 2 * 160, height / 6 - 12 + 24 * (var2 >> 1), var6, options.getKeyBinding(var6));
            buttonList.add(var7);
            ++var2;
        }
        this.buttonList.add(new GuiSmallButton(200, this.width / 2 - 75, this.height / 4 + 120, var1.translateKey("gui.done")));
    }

    /**
     * Fired when a control is clicked. This is the equivalent of
     * ActionListener.actionPerformed(ActionEvent e).
     */
    protected void actionPerformed(GuiButton par1GuiButton) {
        if (par1GuiButton.enabled) {
            if (par1GuiButton.id < 100 && par1GuiButton instanceof GuiSmallButton) {
                options.setOptionValue(((GuiSmallButton) par1GuiButton).returnEnumOptions(), 1);
                par1GuiButton.displayString = options.getKeyBinding(Objects.requireNonNull(EnumOptions.getEnumOptions(par1GuiButton.id)));
            }
            if (par1GuiButton.id == 200) {
                mc.gameSettings.saveOptions();
                mc.displayGuiScreen(parentScreen);
            }
        }
    }

    /**
     * Draws the screen and all the components in it.
     */
    public void drawScreen(int par1, int par2, float par3) {
        this.drawDefaultBackground();
        this.drawCenteredString(fontRenderer, screenTitle, width / 2, 15, 16777215);
        super.drawScreen(par1, par2, par3);
    }
}
