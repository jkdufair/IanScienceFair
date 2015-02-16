var mineflayer = require('mineflayer');

var botCount = 0;

function jumper(bot) {
    bot.setControlState('jump', true);
    bot.setControlState('jump', false);
    if (bot.entity && bot.entity.position) {
	bot.entity.position.translate(1,1,0);
    }
    setTimeout(function () {
	jumper(bot);
    }, 100);

}

function addBots() {
    var botName = 'Jumpbot' + botCount;
    botCount++;
    var bot = mineflayer.createBot({
	host: "10.0.1.30", // optional
	port: 25565,       // optional
	username: botName
    });

    //jumper(bot);
    setTimeout(addBots, 200);
}

addBots();

