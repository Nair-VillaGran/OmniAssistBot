require("dotenv").config();

import express from "express";
import createLogger from "./utils/logger";
import { Bot } from "grammy";
import { MENU_COMMANDS } from "./commands";
import { LOGGER_NAMES } from "./constants/logger-names";

const commandLogger = createLogger(LOGGER_NAMES.CORE);
async function bootstrap() {
  const bot = new Bot(process.env.BOT_TOKEN || "");
  const app = express();

  bot.command("start", (ctx) => ctx.reply("Bienvenido a OmniAssist"));

  await bot.api.setMyCommands(MENU_COMMANDS);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    commandLogger.info(`Server running on port ${PORT}`);
  });

  await bot.start();
}

bootstrap().catch((err) => commandLogger.error(err));
