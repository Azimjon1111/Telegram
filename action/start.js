const { bot } = require('../bot')
const { Markup } = require('telegraf')
bot.start( ctx => {
    let userName = ctx.from.first_name;
    let undifinedName = ctx.from.last_name;
    let lastName;
    if(undifinedName == undefined){
      lastName = " "
    }else{
      lastName = undifinedName 
    }
    let text = `Xush kelibsiz ${userName} ${lastName}. Quyidagilardan tanlang:`
    ctx.reply( text, Markup
          .keyboard([
            ['✅ Taqvimga Ulanish', '📹 Videolar'], // Row1 with 2 buttons
            ['🖼 Taqvim sur`ati va vaqtlari', '📖Duolar', '🎉Tabriklar'], // Row2 with 2 buttons
          ])
          .oneTime()
          .resize())
})
// bot.launch()