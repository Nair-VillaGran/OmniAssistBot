import express from "express";
import { Bot } from "grammy";
import { ALLOWED_COMMANDOS } from "./commands";
import { welcome } from "./functions/welcome";
import { youtubeConvert } from "./functions/youtube-convert";

const bot = new Bot("");

const app = express();

bot.command("start", (ctx) => ctx.reply("Bienvenido a OmniAssist"));

bot.on("message", (ctx) => {
  const { text } = ctx.message;

  if (text === ALLOWED_COMMANDOS.WELCOME) {
    welcome(ctx);
  }

  if (text === ALLOWED_COMMANDOS.CONVERTYT) {
    youtubeConvert(ctx);
  }
});

bot.start();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
