const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );

module.exports = class UnlockCommand extends BaseCommand
{
    constructor()
    {
        super( 'unlock', 'administration', [] );
    }

    // After you use it while having no permissions, this message will print.
    async run( client, message, args )
    {
        if ( !message.member.permissions.has( "MANAGE_CHANNELS" ) )
            return message.channel.send(
                'You cannot use this command, it requires `MANAGE_CHANNELS` permissions.'
            );

        const role = message.guild.roles.cache.get( 'MEMBERROLEID' )

        // Nothing important unless you are actual developer
        let lockchannel = message.mentions.channels.first() || message.guild
            .channels.cache.get( args[ 0 ] );
        if ( !lockchannel ) lockchannel = message.channel;

        // Classic succeed message
        const Embed = new Discord.MessageEmbed()
            .setAuthor( `Successfully unlocked ${lockchannel.name}` )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911', message.author.displayAvatarURL(
            {
                dynamic: true
            } ) )

        // Pretty self-explanatory
        await lockchannel.updateOverwrite( role
            , {
                SEND_MESSAGES: true
            } )
            .catch( err => console.log( err ) );

        message.channel.send( Embed );
    }
}
