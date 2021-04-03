const { bot } = require('../bot')
const { Markup } = require('telegraf')

bot.hears('📖Duolar', ctx =>{
    ctx.reply( 'Tanlang', Markup
        .inlineKeyboard([
            [
                Markup.button.callback(
                  "Ro‘za tutish (saharlik, og‘iz yopish) duosi",
                  "Ro‘za tutish (saharlik, og‘iz yopish) duosi"
                )
            ],
            [
                Markup.button.callback(
                  "Iftorlik (og‘iz ochish) duosi",
                  "Iftorlik (og‘iz ochish) duosi"
                )
            ],
            [
                Markup.button.callback(
                  "Taroveh tasbehi",
                  "Taroveh tasbehi"
                )
            ]
        ])
        .oneTime()
        .resize())})
bot.action('Ro‘za tutish (saharlik, og‘iz yopish) duosi', ctx =>{
    let text = `<b>نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرَ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ، خَالِصًا لِلهِ تَعَالَى أَللهُ أَكْبَرُ</b>
    -------------------------------------------------------------------------------------------------
    `+`<b> Navaytu an asuvma sovma shahri ramazona minal fajri ilal mag‘ribi, xolisan lillahi taʼaalaa Allohu akbar.</b>
    -------------------------------------------------------------------------------------------------
    ` + `Maʼnosi: Ramazon oyining ro‘zasini subhdan to kun botguncha tutmoqni niyat qildim. Xolis Alloh uchun Alloh buyukdir.
    `
    ctx.replyWithHTML(text).then()  
})
bot.action('Iftorlik (og‘iz ochish) duosi', ctx =>{
    let text = `<b>اَللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَّلْتُ وَ عَلَى رِزْقِكَ أَفْتَرْتُ، فَغْفِرْلِى مَا قَدَّمْتُ وَ مَا أَخَّرْتُ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ</b>
    -------------------------------------------------------------------------------------------------
    `+`<b>Allohumma laka sumtu va bika aamantu va aʼlayka tavakkaltu va aʼlaa rizqika aftartu, fag‘firliy ma qoddamtu va maa axxortu birohmatika yaa arhamar roohimiyn.</b>
    -------------------------------------------------------------------------------------------------
    ` + `Maʼnosi: Ey Alloh, ushbu Ro‘zamni Sen uchun tutdim va Senga iymon keltirdim va Senga tavakkal qildim va bergan rizqing bilan iftor qildim. Ey mehribonlarning eng mehriboni, mening avvalgi va keyingi gunohlarimni mag‘firat qilgil.
    `
    ctx.replyWithHTML(text).then()  
})
bot.action('Taroveh tasbehi', ctx =>{
    let text = `<b>“Subhaana zil mulki val malakuut, subhaana zil ʼizzati val ʼazomati val qudroti val kibriyaai val jabaruut. Subhaanal malikil hayyillaziy laa yamuut. Subbuuhun qudduusur Robbunaa va Robbul malaaikati var-ruuh, Laa ilaaha illalohu nastag‘firulloh, nas-alukal jannata va naʼuuzu bika minan naar”.</b>
    -----------------------------------------------------------------------------------------------------
    ` + `Maʼnosi: “Mulk va malakut Egasini poklab yod etaman! Izzat, buyuklik, qudrat, ulug‘vorlik va hukmronlik Egasini poklab yod etaman! Hargiz o‘lmaydigan Hayyni, Malikni poklab yod etaman! U Zot Subbuhdir, Quddusdir, bizning Robbimizdir, farishtalarning va Ruhning Robbidir. Allohdan O‘zga iloh yo‘q! Allohdan mag‘firat so‘raymiz. Sendan jannat so‘raymiz va do‘zaxdan O‘zingdan panoh tilaymiz”.
    `
    ctx.replyWithHTML(text).then()  
})
// bot.launch()