package net.minecraft.src;

import net.minecraft.server.MinecraftServer;

import java.util.List;

public class CommandXP extends CommandBase {
    public String getCommandName() {
        return "xp";
    }

    /**
     * Return the required permission level for this command.
     */
    public int getRequiredPermissionLevel() {
        return 2;
    }

    public String getCommandUsage(ICommandSender par1ICommandSender) {
        return par1ICommandSender.translateString("commands.xp.usage");
    }

    public void processCommand(ICommandSender par1ICommandSender, String[] par2ArrayOfStr) {
        if (par2ArrayOfStr.length <= 0) {
            throw new WrongUsageException("commands.xp.usage");
        } else {
            String var4 = par2ArrayOfStr[0];
            boolean var5 = var4.endsWith("l") || var4.endsWith("L");

            if (var5 && var4.length() > 1) {
                var4 = var4.substring(0, var4.length() - 1);
            }

            int var6 = parseInt(par1ICommandSender, var4);
            boolean var7 = var6 < 0;

            if (var7) {
                var6 *= -1;
            }

            EntityPlayerMP var3;

            if (par2ArrayOfStr.length > 1) {
                var3 = func_82359_c(par1ICommandSender, par2ArrayOfStr[1]);
            } else {
                var3 = getCommandSenderAsPlayer(par1ICommandSender);
            }

            if (var5) {
                if (var7) {
                    var3.addExperienceLevel(-var6);
                    notifyAdmins(par1ICommandSender, "commands.xp.success.negative.levels",
                            Integer.valueOf(var6), var3.getEntityName());
                } else {
                    var3.addExperienceLevel(var6);
                    notifyAdmins(par1ICommandSender, "commands.xp.success.levels",
                            Integer.valueOf(var6), var3.getEntityName());
                }
            } else {
                if (var7) {
                    throw new WrongUsageException("commands.xp.failure.widthdrawXp");
                }

                var3.addExperience(var6);
                notifyAdmins(par1ICommandSender, "commands.xp.success",
                        Integer.valueOf(var6), var3.getEntityName());
            }
        }
    }

    /**
     * Adds the strings available in this command to the given list of tab
     * completion options.
     */
    public List addTabCompletionOptions(ICommandSender par1ICommandSender, String[] par2ArrayOfStr) {
        return par2ArrayOfStr.length == 2 ? getListOfStringsMatchingLastWord(par2ArrayOfStr, this.getAllUsernames())
                : null;
    }

    protected String[] getAllUsernames() {
        return MinecraftServer.getServer().getAllUsernames();
    }

    /**
     * Return whether the specified command parameter index is a username parameter.
     */
    public boolean isUsernameIndex(String[] par1ArrayOfStr, int par2) {
        return par2 == 1;
    }
}
