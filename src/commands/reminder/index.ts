import createLogger from "../../utils/logger";
import constants from "../../constants/index";

const { commands, loggerNames } = constants;

const commandLogger = createLogger(
  loggerNames.LOGGER_NAMES.COMMAND || commands.ALLOWED_COMMANDOS.REMINDER
);

export const reminder = {
  command: constants.commands.ALLOWED_COMMANDOS.REMINDER,
  handler: async (ctx: any) => {
    commandLogger.info(ctx);
  },
};
