const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );
module.exports = class MembercountCommand extends BaseCommand
{
    constructor()
    {
        super( 'membercount', 'misc', [] );
    }

    async run( client, message, args )
    {
        const Embed = new Discord.MessageEmbed()
            .setTitle(
                `**${message.guild.name} has ${message.guild.memberCount} Members**`
            )
            .setImage( message.guild.iconURL(
            {
                dynamic: true
            } ) )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911' )
        message.channel.send( Embed );
    }
}
