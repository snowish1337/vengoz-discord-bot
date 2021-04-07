const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'administration', []);
  }

  async run(client, message, args) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('You cannot use this command, it requires `ADMINISTRATOR` permissions.');

    const Embed = new Discord.MessageEmbed()
    .setAuthor('Successfully nuked this channel.')
    .setImage('https://cdn.discordapp.com/attachments/827281538370633778/827281545260957746/catnuke.gif')
    .setColor('#007ACC')
    .setFooter('Developed by snow#0911', message.author.displayAvatarURL({ dynamic : true}))
    
    await message.channel.clone().then((ch) => {
      ch.setParent(message.channel.parent.id);
      ch.setPosition(message.channel.position);
      message.channel.delete();

      ch.send(Embed);
    })
  }
}