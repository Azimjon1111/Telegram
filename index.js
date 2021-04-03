require('dotenv').config();
require('./action');
const { bot } = require('./bot')
require('./bot');
const express = require('express')
const app = express()
app.use(bot.webhookCallback('/m&wl~'))
bot.telegram.setWebhook('https://telegramramazon.herokuapp.com/m&wl~')