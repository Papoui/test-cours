const Discord = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("c'est bon !");
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}test`)) {
    msg.channel.send({
      embed: {
        color: 9782005,
        description: ""
      }
    });
  }
});

client.login(TOKEN);