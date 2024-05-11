require("dotenv").config();

import express from "express";
import createLogger from "./utils/logger";
import commands from "./commands/index";
import constants from "./constants/index";
import { Bot } from "grammy";
// import { Menu } from "@grammyjs/menu";

const { commands: commandConstants, loggerNames } = constants;

const commandLogger = createLogger(loggerNames.LOGGER_NAMES.CORE);
async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const bot = new Bot(process.env.BOT_TOKEN || "");
  const app = express();

  commands.forEach(({ command, handler }) => {
    bot.command(command, handler);
  });

  await bot.api.setMyCommands(commandConstants.MENU_COMMANDS);

  app.listen(PORT, () => {
    commandLogger.info(`Server running on port ${PORT}`);
  });

  await bot.start();
}

bootstrap().catch((err) => commandLogger.error(err));
