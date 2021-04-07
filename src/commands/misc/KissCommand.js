const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class KissCommand extends BaseCommand {
  constructor() {
    super('kiss', 'misc', []);
  }

  async run(client, message, args) {

    const mentionedmember = message.mentions.members.first();

    if (!mentionedmember) return message.channel.send('You need to mention someone to kiss! -('-')-')


    const Embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** just kissed **${mentionedmember.user.username}** <3`)
    .setImage('https://cdn.discordapp.com/attachments/708671674534330420/708672195035005008/GyRwi3fonEp.gif')
    .setColor('#007ACC')
    .setFooter('Developed by snow#0911', message.author.displayAvatarURL({ dynamic : true}))

    message.channel.send(Embed);
  }
}