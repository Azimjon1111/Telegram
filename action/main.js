const { bot } = require('../bot')
const { Markup } = require('telegraf')
const CronJob = require('cron').CronJob;

bot.hears('✅ Taqvimga Ulanish', ctx =>{
let date = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let moonth = () => {
    let result;
   if(month < 10){
   result= '0'+ month
}else{
   result= month 
} return result 
}
let datee = () => {
    let result;
   if(date < 10){
   result= '0'+ date
}else{
   result= date
} return result 
}
let yearr = () => {
    let result;
   if(year < 10){
   result= '0'+ year
}else{
   result= year 
} return result 
}
let xour = () => {
    let result;
   if(hour < 10){
   result= '0'+ hour
}else{
   result= hour 
} return result 
}
let minute = () => {
    let result;
   if(minutes < 10){
   result= '0'+ minutes
}else{
   result= minutes 
} return result 
}
let second = () => {
    let result;
   if(seconds < 10){
   result= '0'+ seconds
}else{
   result= seconds
} return result 
}
    ctx.reply(
        '✅Biz sizni Ramazon oyi vaqtida Ro`za tutish va iftorlik paytlaridan 5 daqiqa oldin estlatamiz'
        +
        `
        Hozirgi sana ${datee()}.${moonth()}.${yearr()} va soat ${xour()}:${minute()}:${second()}
        `
        +'Taqvimga ulanish  uchun "✅Ulanish" tugmasini bosing',
        Markup.inlineKeyboard([
          Markup.button.callback('✅Ulanish', '✅Ulanish'),
        ]).resize()
      )
})



// bot.launch()