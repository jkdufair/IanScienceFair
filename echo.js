var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  host: "localhost", // optional
  port: 25565,       // optional
});
bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  bot.chat(message);
});
