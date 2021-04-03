const { bot } = require('../bot')
const { Markup } = require('telegraf')

bot.hears("📹 Videolar", (ctx) => {
  ctx.reply(
    "Bizda hozir ushbu domlalarning Muborak Ramazon oyiga bag'ishlangan maruzalari mavjud:",
    Markup.inlineKeyboard([
[
        Markup.button.callback(
          "Shayx Muhammad Sodiq Muhammad Yusuf",
          "Shayx Muhammad Sodiq Muhammad Yusuf"
        ),
        Markup.button.callback(
          "Abdulloh Domla",
          "Abdulloh Domla"
          ),
      ],
      [
        Markup.button.callback(
          "Salohiddin Domla",
          "Salohiddin Domla"
        ),
        Markup.button.callback("Shayx Mustafo Adaviy", "Shayx Mustafo Adaviy"),
      ],
      [
        Markup.button.callback(
          "Odilxon qori Yunusxon o`gʻli",
          "Odilxon qori Yunusxon o`gʻli"
        ),
        Markup.button.callback("Аброр Мухтор Алий", "Аброр Мухтор Алий"),
      ]
    ]
    )
  );
});


bot.action('Shayx Muhammad Sodiq Muhammad Yusuf', (ctx, next) => {
  return ctx.reply('https://www.youtube.com/watch?v=EMfZ7o-kI78&list=PLUgBjk6HbvLvDI2np0JMttrSnHcegcboZ&index=33').then(() => next())
})

bot.action('Odilxon qori Yunusxon o`gʻli', (ctx, next) => {
  return ctx.reply('https://www.youtube.com/watch?v=wxllEpDrvco&list=PLL4MJ9Al7yF4DOr7lWfOPB72JPCG3cGyy').then(() => next())
})
bot.action('Аброр Мухтор Алий', (ctx, next) => {
  return ctx.reply('https://www.youtube.com/watch?v=Eo2Kam9gx1k').then(() => next())
})
bot.action('Salohiddin Domla', (ctx, next) => {
  return ctx.reply('https://www.youtube.com/watch?v=vBhKyTX1Yy4').then(() => next())
})
bot.action('Shayx Mustafo Adaviy', (ctx, next) => {
  return ctx.reply('https://www.youtube.com/watch?v=By57fXBh0YI').then(() => next())
})

bot.action('Abdulloh Domla', (ctx, next) => {
  return ctx.reply('https://www.youtube.com/watch?v=3kffssPBrr4&list=PL77O9WUjcBfk1aKyCkIamxTRsN7KC7uV0&index=1').then(() => next())
})

// bot.launch()