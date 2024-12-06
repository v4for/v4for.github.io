package net.minecraft.src;

import net.minecraft.server.MinecraftServer;

import java.util.Arrays;
import java.util.List;

public class CommandServerMessage extends CommandBase {
    public List getCommandAliases() {
        return Arrays.asList("w", "msg");
    }

    public String getCommandName() {
        return "tell";
    }

    /**
     * Return the required permission level for this command.
     */
    public int getRequiredPermissionLevel() {
        return 0;
    }

    public void processCommand(ICommandSender par1ICommandSender, String[] par2ArrayOfStr) {
        if (par2ArrayOfStr.length < 2) {
            throw new WrongUsageException("commands.message.usage");
        } else {
            EntityPlayerMP var3 = func_82359_c(par1ICommandSender, par2ArrayOfStr[0]);

            if (var3 == null) {
                throw new PlayerNotFoundException();
            } else if (var3 == par1ICommandSender) {
                throw new PlayerNotFoundException("commands.message.sameTarget");
            } else {
                String var4 = func_82361_a(par1ICommandSender, par2ArrayOfStr, 1,
                        !(par1ICommandSender instanceof EntityPlayer));
                var3.sendChatToPlayer(EnumChatFormatting.GRAY + "" + EnumChatFormatting.ITALIC
                        + var3.translateString("commands.message.display.incoming",
                        new Object[]{par1ICommandSender.getCommandSenderName(), var4}));
                par1ICommandSender.sendChatToPlayer(EnumChatFormatting.GRAY + "" + EnumChatFormatting.ITALIC
                        + par1ICommandSender.translateString("commands.message.display.outgoing",
                        new Object[]{var3.getCommandSenderName(), var4}));
            }
        }
    }

    /**
     * Adds the strings available in this command to the given list of tab
     * completion options.
     */
    public List addTabCompletionOptions(ICommandSender par1ICommandSender, String[] par2ArrayOfStr) {
        return getListOfStringsMatchingLastWord(par2ArrayOfStr, MinecraftServer.getServer().getAllUsernames());
    }

    /**
     * Return whether the specified command parameter index is a username parameter.
     */
    public boolean isUsernameIndex(String[] par1ArrayOfStr, int par2) {
        return par2 == 0;
    }
}
