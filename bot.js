const { Telegraf} = require('telegraf');
const bot = new Telegraf(process.env.Token);

// bot.launch()
module.exports = {
    bot
}