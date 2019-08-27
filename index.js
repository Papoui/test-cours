const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.reply('pong');
  }
});

client.login('NjE1NzAzNDY0NjMwMDI2MjQw.XWR87A.yeZ2haruBiKVLaj2sLHAg2f-N54');