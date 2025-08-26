// worker.js
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token);

function sendHourlyMessage() {
  bot.sendMessage(chatId, 'Stündliche Worker-Message!');
}

setInterval(sendHourlyMessage, 3600000);
sendHourlyMessage();
