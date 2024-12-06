package net.minecraft.src;

public class CommandKick extends CommandBase {
    public String getCommandName() {
        return "kick";
    }

    /**
     * Return the required permission level for this command.
     */
    public int getRequiredPermissionLevel() {
        return 2;
    }

    public void processCommand(ICommandSender par1ICommandSender, String[] par2ArrayOfStr) {
        if (par2ArrayOfStr.length == 0) {
            throw new WrongUsageException("commands.kick.usage");
        }
        EntityPlayerMP target = func_82359_c(par1ICommandSender, par2ArrayOfStr[0]);
        if (target.mcServer.getServerOwner().equals(target.username)) {
            throw new SyntaxErrorException("commands.kick.owner");
        }
        if (par2ArrayOfStr.length == 1) {
            target.playerNetServerHandler.kickPlayer("Kicked.");
            notifyAdmins(par1ICommandSender, "commands.kick.success",
                    target.getEntityName());
        } else {
            String message = String.join(" ", par2ArrayOfStr);
            message = message.substring(message.indexOf(' ') + 1).trim();
            target.playerNetServerHandler.kickPlayer(message);
            notifyAdmins(par1ICommandSender, "commands.kick.success.reason",
                    target.getEntityName(), message);
        }
    }
}
