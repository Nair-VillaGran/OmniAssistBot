import createLogger from "../../utils/logger";
import constants from "../../constants/index";

const { commands, loggerNames } = constants;

const commandLogger = createLogger(
  loggerNames.LOGGER_NAMES.COMMAND || commands.ALLOWED_COMMANDOS.YOUTUBE_CONVERT
);

export const youtubeConvert = {
  command: commands.ALLOWED_COMMANDOS.YOUTUBE_CONVERT,
  handler: async (ctx: any) => {
    commandLogger.info(ctx);
  },
};
