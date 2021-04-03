const { bot } = require('../bot')
const CronJob = require('cron').CronJob;

bot.action( '✅Ulanish', ctx => {
let Ramadansimple = '1 23 1 3 *'; 
let Ramadansimple1 = '2 23 1 3 *'; 
let Ramadans1 = '23 4 12 3 *'; 
let Ramadans2 = '22 4 13 3 *'; 
let Ramadans3 = '20 4 14 3 *'; 
let Ramadans4 = '18 4 15 3 *'; 
let Ramadans5 = '16 4 16 3 *'; 
let Ramadans6 = '14 4 17 3 *'; 
let Ramadans7 = '12 4 18 3 *'; 
let Ramadans8 = '11 4 19 3 *'; 
let Ramadans9 = '9 4 20 3 *'; 
let Ramadans10 = '7 4 21 3 *'; 
let Ramadans11 = '5 4 22 3 *'; 
let Ramadans12 = '3 4 23 3 *'; 
let Ramadans13 = '2 4 24 3 *'; 
let Ramadans14 = '0 4 25 3 *'; 
let Ramadans15 = '58 3 26 3 *'; 
let Ramadans16 = '56 3 27 3 *'; 
let Ramadans17 = '55 3 28 3 *'; 
let Ramadans18 = '53 3 29 3 *'; 
let Ramadans19 = '51 3 30 3 *'; 
let Ramadans20 = '50 3 1 4 *'; 
let Ramadans21 = '48 3 2 4 *'; 
let Ramadans22 = '46 3 3 4 *'; 
let Ramadans23 = '45 3 4 4 *'; 
let Ramadans24 = '43 3 5 4 *'; 
let Ramadans25 = '41 3 6 4 *'; 
let Ramadans26 = '40 3 7 4 *'; 
let Ramadans27 = '38 3 8 4 *'; 
let Ramadans28 = '37 3 9 4 *'; 
let Ramadans29 = '35 3 10 4 *'; 
let Ramadans30 = '34 3 11 4 *';
//---------------------------
let Ramadani1 = '55 18 12 3 *'; 
let Ramadani2 = '56 18 13 3 *'; 
let Ramadani3 = '57 18 14 3 *'; 
let Ramadani4 = '58 18 15 3 *'; 
let Ramadani5 = '59 18 16 3 *'; 
let Ramadani6 = '* 19 17 3 *'; 
let Ramadani7 = '1 19 18 3 *'; 
let Ramadani8 = '2 19 19 3 *'; 
let Ramadani9 = '3 19 20 3 *'; 
let Ramadani10 = '5 19 21 3 *'; 
let Ramadani11 = '6 19 22 3 *'; 
let Ramadani12 = '7 19 23 3 *'; 
let Ramadani13 = '8 19 24 3 *'; 
let Ramadani14 = '9 19 25 3 *'; 
let Ramadani15 = '10 3 26 3 *'; 
let Ramadani16 = '11 3 27 3 *'; 
let Ramadani17 = '12 3 28 3 *'; 
let Ramadani18 = '13 3 29 3 *'; 
let Ramadani19 = '14 3 30 3 *'; 
let Ramadani20 = '15 3 1 4 *'; 
let Ramadani21 = '16 3 2 4 *'; 
let Ramadani22 = '17 3 3 4 *'; 
let Ramadani23 = '18 3 4 4 *'; 
let Ramadani24 = '20 3 5 4 *'; 
let Ramadani25 = '21 3 6 4 *'; 
let Ramadani26 = '22 3 7 4 *'; 
let Ramadani27 = '23 3 8 4 *'; 
let Ramadani28 = '24 3 9 4 *'; 
let Ramadani29 = '25 3 10 4 *'; 
let Ramadani30 = '26 3 11 4 *';  
let connect = `✅Ulanish muvaffaqiyatli amalga oshirildi!`
ctx.reply(connect)

let saharlik = `Saharlikka 5 daqiqa qoldi`
let text = `<b>نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرَ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ، خَالِصًا لِلهِ تَعَالَى أَللهُ أَكْبَرُ</b>
    -------------------------------------------------------------------------------------------------
    `+`<b> Navaytu an asuvma sovma shahri ramazona minal fajri ilal mag‘ribi, xolisan lillahi taʼaalaa Allohu akbar.</b>
    -------------------------------------------------------------------------------------------------
    ` + `Maʼnosi: Ramazon oyining ro‘zasini subhdan to kun botguncha tutmoqni niyat qildim. Xolis Alloh uchun Alloh buyukdir.
    `
let iftorlik = `Iftorlikka 5 daqiqa qoldi`
let texti = `<b>اَللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَّلْتُ وَ عَلَى رِزْقِكَ أَفْتَرْتُ، فَغْفِرْلِى مَا قَدَّمْتُ وَ مَا أَخَّرْتُ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ</b>
-------------------------------------------------------------------------------------------------
`+`<b>Allohumma laka sumtu va bika aamantu va aʼlayka tavakkaltu va aʼlaa rizqika aftartu, fag‘firliy ma qoddamtu va maa axxortu birohmatika yaa arhamar roohimiyn.</b>
-------------------------------------------------------------------------------------------------
` + `Maʼnosi: Ey Alloh, ushbu Ro‘zamni Sen uchun tutdim va Senga iymon keltirdim va Senga tavakkal qildim va bergan rizqing bilan iftor qildim. Ey mehribonlarning eng mehriboni, mening avvalgi va keyingi gunohlarimni mag‘firat qilgil.
`

// Saharlik


const job1 = new CronJob( Ramadans1, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job2 = new CronJob( Ramadans2, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job3 = new CronJob( Ramadans3, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job4 = new CronJob( Ramadans4, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job5 = new CronJob( Ramadans5, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job6 = new CronJob( Ramadans6, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job7 = new CronJob( Ramadans7, function() {
    ctx.replyWithHTML(saharlik)
    ctx.replyWithHTML(text)
    }, null, true);
    const job8 = new CronJob( Ramadans8, function() {
    ctx.replyWithHTML(saharlik)
    ctx.replyWithHTML(text)
    }, null, true);
    const job9 = new CronJob( Ramadans9, function() {
    ctx.replyWithHTML(saharlik)
    ctx.replyWithHTML(text)
    }, null, true);
    const job10 = new CronJob( Ramadans10, function() {
    ctx.replyWithHTML(saharlik)
    ctx.replyWithHTML(text)
    }, null, true);
    const job11 = new CronJob( Ramadans11, function() {
    ctx.replyWithHTML(saharlik)
    ctx.replyWithHTML(text)
    }, null, true);
    const job12 = new CronJob( Ramadans12, function() {
    ctx.replyWithHTML(saharlik)
    ctx.replyWithHTML(text)
    }, null, true);
    const job13 = new CronJob( Ramadans13, function() {
        ctx.replyWithHTML(saharlik)
        ctx.replyWithHTML(text)
        }, null, true);
        const job14 = new CronJob( Ramadans14, function() {
        ctx.replyWithHTML(saharlik)
        ctx.replyWithHTML(text)
        }, null, true);
        const job15 = new CronJob( Ramadans15, function() {
        ctx.replyWithHTML(saharlik)
        ctx.replyWithHTML(text)
        }, null, true);
        const job16 = new CronJob( Ramadans16, function() {
        ctx.replyWithHTML(saharlik)
        ctx.replyWithHTML(text)
        }, null, true);
        const job17 = new CronJob( Ramadans17, function() {
        ctx.replyWithHTML(saharlik)
        ctx.replyWithHTML(text)
        }, null, true);
        const job18 = new CronJob( Ramadans18, function() {
        ctx.replyWithHTML(saharlik)
        ctx.replyWithHTML(text)
        }, null, true);
const job19 = new CronJob( Ramadans19, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job20 = new CronJob( Ramadans20, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job21 = new CronJob( Ramadans21, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job22 = new CronJob( Ramadans22, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job23 = new CronJob( Ramadans23, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job24 = new CronJob( Ramadans24, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job25 = new CronJob( Ramadans25, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job26 = new CronJob( Ramadans26, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job27 = new CronJob( Ramadans27, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job28 = new CronJob( Ramadans28, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job29 = new CronJob( Ramadans29, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);
const job30 = new CronJob( Ramadans30, function() {
ctx.replyWithHTML(saharlik)
ctx.replyWithHTML(text)
}, null, true);

///iftorlik

const jop1 = new CronJob( Ramadansimple, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop2 = new CronJob( Ramadani2, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop3 = new CronJob( Ramadansimple1, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop4 = new CronJob( Ramadani4, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop5 = new CronJob( Ramadani5, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop6 = new CronJob( Ramadani6, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop7 = new CronJob( Ramadani7, function() {
        ctx.replyWithHTML(iftorlik)
        ctx.replyWithHTML(texti)
        }, null, true);
        const jop8 = new CronJob( Ramadani8, function() {
        ctx.replyWithHTML(iftorlik)
        ctx.replyWithHTML(texti)
        }, null, true);
        const jop9 = new CronJob( Ramadani9, function() {
        ctx.replyWithHTML(iftorlik)
        ctx.replyWithHTML(texti)
        }, null, true);
        const jop10 = new CronJob( Ramadani10, function() {
        ctx.replyWithHTML(iftorlik)
        ctx.replyWithHTML(texti)
        }, null, true);
        const jop11 = new CronJob( Ramadani11, function() {
        ctx.replyWithHTML(iftorlik)
        ctx.replyWithHTML(texti)
        }, null, true);
        const jop12 = new CronJob( Ramadani12, function() {
        ctx.replyWithHTML(iftorlik)
        ctx.replyWithHTML(texti)
        }, null, true);
        const jop13 = new CronJob( Ramadani13, function() {
            ctx.replyWithHTML(iftorlik)
            ctx.replyWithHTML(texti)
            }, null, true);
            const jop14 = new CronJob( Ramadani14, function() {
            ctx.replyWithHTML(iftorlik)
            ctx.replyWithHTML(texti)
            }, null, true);
            const jop15 = new CronJob( Ramadani15, function() {
            ctx.replyWithHTML(iftorlik)
            ctx.replyWithHTML(texti)
            }, null, true);
            const jop16 = new CronJob( Ramadani16, function() {
            ctx.replyWithHTML(iftorlik)
            ctx.replyWithHTML(texti)
            }, null, true);
            const jop17 = new CronJob( Ramadani17, function() {
            ctx.replyWithHTML(iftorlik)
            ctx.replyWithHTML(texti)
            }, null, true);
            const jop18 = new CronJob( Ramadani18, function() {
            ctx.replyWithHTML(iftorlik)
            ctx.replyWithHTML(texti)
            }, null, true);
    const jop19 = new CronJob( Ramadani19, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop20 = new CronJob( Ramadani20, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop21 = new CronJob( Ramadani21, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop22 = new CronJob( Ramadani22, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop23 = new CronJob( Ramadani23, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop24 = new CronJob( Ramadani24, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop25 = new CronJob( Ramadani25, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop26 = new CronJob( Ramadani26, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop27 = new CronJob( Ramadani27, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop28 = new CronJob( Ramadani28, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop29 = new CronJob( Ramadani29, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
    const jop30 = new CronJob( Ramadani30, function() {
    ctx.replyWithHTML(iftorlik)
    ctx.replyWithHTML(texti)
    }, null, true);
job1.start();
job2.start();
job3.start();
job4.start();
job5.start();
job6.start();
job7.start();
job8.start();
job9.start();
job10.start();
job11.start();
job12.start();
job13.start();
job14.start();
job15.start();
job16.start();
job17.start();
job18.start();
job19.start();
job20.start();
job21.start();
job22.start();
job23.start();
job24.start();
job25.start();
job26.start();
job27.start();
job28.start();
job29.start();
job30.start();


jop1.start();
jop2.start();
jop3.start();
jop4.start();
jop5.start();
jop6.start();
jop7.start();
jop8.start();
jop9.start();
jop10.start();
jop11.start();
jop12.start();
jop13.start();
jop14.start();
jop15.start();
jop16.start();
jop17.start();
jop18.start();
jop19.start();
jop20.start();
jop21.start();
jop22.start();
jop23.start();
jop24.start();
jop25.start();
jop26.start();
jop27.start();
jop28.start();
jop29.start();
jop30.start();

})
// bot.launch()