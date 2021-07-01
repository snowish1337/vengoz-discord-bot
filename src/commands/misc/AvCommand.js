const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );
module.exports = class AvCommand extends BaseCommand
{
    constructor()
    {
        super( 'av', 'misc', [] );
    }

    async run( client, message, args )
    {
        const mentionedUser = message.mentions.users.first() || message
            .author;
        const Embed = new Discord.MessageEmbed()
            .setTitle( `${mentionedUser.username}'s Avatar` )
            .setImage( mentionedUser.avatarURL(
            {
                dynamic: true
            } ) )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911' )
        message.channel.send( Embed );
    }
}
