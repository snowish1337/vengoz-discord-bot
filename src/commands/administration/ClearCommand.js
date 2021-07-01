const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );

module.exports = class ClearCommand extends BaseCommand
{
    constructor()
    {
        super( 'clear', 'administration', [] );
    }

    // Simple message if you don't have permissions and you attempt to run this command. You can change it as long as you don't delete the ''
    async run( client, message, args )
    {
        if ( !message.member.permissions.has( "MANAGE_MESSAGES" ) )
            return message.channel.send(
                'You cannot use this command, it requires `MANAGE_MESSAGES` permissions.'
            );

        // Classic fail message
        if ( !args[ 0 ] ) return message.channel.send(
                '**Please provide a valid amount of messages to clear.**'
            )
            .then( msg =>
            {
                msg.delete(
                {
                    timeout: 3000
                } );
            } )

        // If the value isn't between 2 & 100, the command will not attempt to work
        if ( args[ 0 ] > 100 ) return message.channel.send(
                `**Value must be between 2 & 100!**` )
            .then( msg =>
            {
                msg.delete(
                {
                    timeout: 3000
                } );
            } )

        // Success message. This should be self-explanatory if you aren't dumb
        const Embed = new Discord.MessageEmbed()
            .setAuthor( `Successfully cleared ${args[0]} Messages!` )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911', message.author.displayAvatarURL(
            {
                dynamic: true
            } ) )

        // Message will be deleted after 7000ms. You can change the value as you want, if you want to change this code to not delete the message absolutely, you can simply delete this part of code as you want (do it only if you know how)
        message.channel.bulkDelete( args[ 0 ] )
            .then( Message =>
            {
                return message.channel.send( Embed )
                    .then( msg =>
                    {
                        msg.delete(
                        {
                            timeout: 7000
                        } );
                    } )
            } )
    }
}
