const { bot } = require('../bot')
const { Markup } = require('telegraf')

bot.hears('🖼 Taqvim sur`ati va vaqtlari',  ctx =>{
let timezone = `
Toshkentdan boshqa shaharlardagi vaqtlar farqi (daqiqa) 

Avval: Chimkent (-1), Konibodom (-5), Xo‘jand (-6), Qo‘qon (-7), Jambul (-7), Namangan (-10), Farg‘ona (-10), Marg‘ilon (-10), Andijon (-11), O‘sh (-14), Jalolobod (-15), Bishkek (-21), Olma – ota (-21)

Keyin: Bekobod (+4), Turkiston (+4), Jizzax (+6), Guliston (+7), Denov (+7), Jomboy (+7), Samarqand (+9), Shahrisabz (+10), Kattaqo‘rg‘on (+12), Qarshi (+12), Nurota (+14), Navoiy (+19), Buxoro (+21), Xiva (+35), Nukus (+42)

Oy korinishiga qarab bir kunga farq qilishi mumkin
`
ctx.reply(timezone)     
ctx.replyWithPhoto({source: 'image/taqvim.jpg'})  
})

// bot.launch()