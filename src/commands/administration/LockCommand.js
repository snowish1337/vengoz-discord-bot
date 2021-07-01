const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );

module.exports = class LockCommand extends BaseCommand
{
    constructor()
    {
        super( 'lock', 'administration', [] );
    }

    async run( client, message, args )
    {
        if ( !message.member.permissions.has( "MANAGE_CHANNELS" ) )
            return message.channel.send(
                'You cannot use this command, it requires `MANAGE_CHANNELS` permissions.'
            );

        const role = message.guild.roles.cache.get( 'MEMBERROLEID' )

        let lockchannel = message.mentions.channels.first() || message.guild
            .channels.cache.get( args[ 0 ] );
        if ( !lockchannel ) lockchannel = message.channel;

        const Embed = new Discord.MessageEmbed()
            .setAuthor( `Successfully locked ${lockchannel.name}` )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911', message.author.displayAvatarURL(
            {
                dynamic: true
            } ) )

        await lockchannel.updateOverwrite( role
            , {
                SEND_MESSAGES: false
            } )
            .catch( err => console.log( err ) );

        message.channel.send( Embed );
    }
}
