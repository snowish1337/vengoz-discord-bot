const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'administration', []);
  }

  async run(client, message, args) {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You cannot use this command, it requires `MANAGE_MESSAGES` permissions.');

    if (!args[0]) return message.channel.send('**Please provide a valid amount of messages to clear.**').then(msg => {
      msg.delete({ timeout: 3000});
    })

    if (args[0] > 100) return message.channel.send(`**Value must be between 2 & 100!**`).then(msg => {
      msg.delete({ timeout: 3000});
    })

    const Embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully cleared ${args[0]} Messages!`)
    .setColor('#007ACC')
    .setFooter('Developed by snow#0911', message.author.displayAvatarURL({ dynamic : true}))

    message.channel.bulkDelete(args[0]).then(Message => {
      return message.channel.send(Embed).then(msg => {
        msg.delete({ timeout: 7000});
      })
    })
  }
}