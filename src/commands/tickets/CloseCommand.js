const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class CloseCommand extends BaseCommand {
  constructor() {
    super('close', 'tickets', []);
  }

  async run(client, message, args) {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('You cannot use this command, it requires `MANAGE_CHANNELS` permissions.')

    if (!message.channel.name.startsWith("ticket-")) return message.channel.send('Please only use this command in a ticket channel.');  

    const Embed = new Discord.MessageEmbed()
    .setTitle('Success!')
    .setDescription(`**Closing ${message.channel.name} in 5 seconds!**`)
    .setFooter(`Developed by snow#0911`, "https://cdn.discordapp.com/attachments/819289862423052348/828543357118447626/41353254f750a9e8c4750fe90b9bc2e3.jpg")
    .setColor('#007ACC')

    message.channel.send(Embed);
    setTimeout(() => message.channel.delete(), 5000);
  }
}