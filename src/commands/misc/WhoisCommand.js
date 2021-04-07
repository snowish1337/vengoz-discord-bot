const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = class WhoisCommand extends BaseCommand {
  constructor() {
    super('whois', 'misc', []);
  }

  async run(client, message, args) {
    const mentionedUser = message.mentions.users.first() || message.author;

    const Embed = new Discord.MessageEmbed()
    .setAuthor(mentionedUser.tag, mentionedUser.displayAvatarURL())
    .addField('Account Created', `${moment(mentionedUser.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, true)
    .addField('Joined Server', `${moment(mentionedUser.joinedAt).format("DD-MM-YYYY [at] HH:mm")}`, true)
    .setThumbnail(mentionedUser.displayAvatarURL({dynamic : true}))
    .setColor('#007ACC')
    .setFooter('Developed by snow#0911')
    message.channel.send(Embed);  
  }
}