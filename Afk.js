const Discord = require('discord.js');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
  .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
  .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
  .addField('Location', message.guild.region, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .addBlankField(true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  aliases: ['server'],
  permLevel: 0
};

exports.help = {
  name: 'server',
  description: 'Displays server information & statistics',
  usage: 'server',
  category: 'General',
};
