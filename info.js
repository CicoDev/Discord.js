const Discord = require('discord.js');
module.exports = {
name: 'user',
description: 'Get your or someone else\'s user info',
aliases: ['u',],
cooldown: 2,
execute(message) {
    if (!message.mentions.users.size) {
        const embed = new Discord.MessageEmbed()
            .setTitle(message.author.username)
            .addField('Created',message.author.createdAt)
            .addField('ID',message.author.id)
            .addField('Nickname',message.author.nickname, true)
            .addField("Status",`${ message.author.presence.status}`, true)
            .addField('Joined current server on', message.member.joinedAt)
            .addField('Currently in', message.guild.name)
            .addField('Roles', `<@&${message.guild.member(message.author)._roles.join('> <@&')}>`, true)
            .addField('Permissions',`${message.author.permissions}` )
            .addField('Status',message.author.presence.status)
            .setColor(0x00ffff)
            .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
            .setFooter(`Requested By:${message.author.username}`)
            .setTimestamp();
        return message.channel.send(embed);
