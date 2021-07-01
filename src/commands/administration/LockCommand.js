const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );

module.exports = class LockCommand extends BaseCommand
{
    constructor()
    {
        super( 'lock', 'administration', [] );
    }

    // Classic fail message if you do not have permission. You can change this message as long as you don't delete ''
    async run( client, message, args )
    {
        if ( !message.member.permissions.has( "MANAGE_CHANNELS" ) )
            return message.channel.send(
                'You cannot use this command, it requires `MANAGE_CHANNELS` permissions.'
            );

        const role = message.guild.roles.cache.get( 'MEMBERROLEID' )
        
        // Lock happening here
        let lockchannel = message.mentions.channels.first() || message.guild
            .channels.cache.get( args[ 0 ] );
        if ( !lockchannel ) lockchannel = message.channel;

        // Success message
        const Embed = new Discord.MessageEmbed()
            .setAuthor( `Successfully locked ${lockchannel.name}` )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911', message.author.displayAvatarURL(
            {
                dynamic: true
            } ) )

        // This should be self-explanatory
        await lockchannel.updateOverwrite( role
            , {
                SEND_MESSAGES: false
            } )
            .catch( err => console.log( err ) );

        message.channel.send( Embed );
    }
}
