var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

function timestamp(){
    var d = new Date();
    return d.toUTCString();
}

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('message',function(user, userID, channelID, msg, evt){
    if (userID!=235434980468195329 || msg == 'ping'){
        if ((userID==109400160093601792 || userID == 235431030054584323) && (msg=='ping' || msg=="Ping")){
           bot.sendMessage({
                to: channelID,
                message: 'Pong!',
                tts: true

            });
            console.log(user + " said "+msg+" "+timestamp());
        }else if (msg=='ping' || msg =='Ping'){
            bot.sendMessage({
                to: channelID,
                message: 'Pong!'
            });
            console.log(user + " said "+msg+" "+timestamp());
        }
    }else if (userID!=370878810377158656){
        bot.sendMessage({
            to: channelID,
            message: msg
        });
    console.log(user + " said "+msg+" "+timestamp());
    }


});