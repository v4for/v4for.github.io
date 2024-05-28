package net.minecraft.src;

public class SyntaxErrorException extends CommandException {
    public SyntaxErrorException() {
        this("commands.generic.snytax");
    }

    public SyntaxErrorException(String par1Str, Object... par2ArrayOfObj) {
        super(par1Str, par2ArrayOfObj);
    }
}
