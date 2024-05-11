import createLogger from "../../utils/logger";
import constants from "../../constants/index";

const { commands, loggerNames } = constants;

const commandLogger = createLogger(
  loggerNames.LOGGER_NAMES.COMMAND || commands.ALLOWED_COMMANDOS.WELCOME
);

export const welcome = {
  command: commands.ALLOWED_COMMANDOS.WELCOME,
  handler: async (ctx: any) => {
    commandLogger.info(ctx);
  },
};
