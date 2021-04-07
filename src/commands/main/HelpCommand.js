const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'main', []);
  }

  async run(client, message, args) {
    const Embed = new Discord.MessageEmbed()
    .addField('Main Commands', '`?nuke`,`?clear`,`?lock`,`?unlock`,`?suggest`')
    .addField('Ticket Commands', '`?new`,`?close`,`?add`,`?remove`')
    .addField('Misc Commands', '`?av`,`?membercount`,`?whois`,`?kiss`')
    .addField('Information Commands', '`?help`')
    .setColor('#007ACC')
    .setFooter('Developed by snow#0911')
  
    message.channel.send(Embed);

  }
}