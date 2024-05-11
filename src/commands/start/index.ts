import createLogger from "../../utils/logger";
import constants from "../../constants/index";

const { commands, loggerNames } = constants;

const commandLogger = createLogger(
  loggerNames.LOGGER_NAMES.COMMAND || commands.ALLOWED_COMMANDOS.START
);

export const start = {
  command: commands.ALLOWED_COMMANDOS.START,
  handler: async (ctx: any) => {
    ctx.reply("¡Hola buenas!, ¿Qué deseas realizar hoy?"); //, { reply_markup: menu }
    commandLogger.info(ctx?.message?.from);
  },
  // Welcome - Started!
};
