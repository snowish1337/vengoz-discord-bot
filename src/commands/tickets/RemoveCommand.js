const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );
module.exports = class RemoveCommand extends BaseCommand
{
    constructor()
    {
        super( 'remove', 'tickets', [] );
    }

    async run( client, message, args )
    {
        const mentionedmember = message.mentions.members.first() ||
            message.guild.members.cache.get( args[ 0 ] );

        if ( !message.member.permissions.has( "MANAGE_CHANNELS" ) )
            return message.channel.send(
                'You cannot use this command, it requires `MANAGE_CHANNELS` permissions.'
            )

        if ( !message.channel.name.startsWith( "ticket-" ) ) return message
            .channel.send(
                'Please only use this command in a ticket channel.'
            );

        const Embed = new Discord.MessageEmbed()
            .setTitle( 'Success!' )
            .setDescription(
                `**Removed successfully from ${message.channel.name}**`
            )
            .setFooter( `Developed by snow#0911`
                , "https://cdn.discordapp.com/attachments/819289862423052348/828543357118447626/41353254f750a9e8c4750fe90b9bc2e3.jpg"
            )
            .setColor( '#007ACC' )

        message.channel.updateOverwrite( mentionedmember
        , {
            SEND_MESSAGE: false
            , VIEW_CHANNEL: false
            , ATTACH_FILES: false
        } )

        message.channel.send( Embed );
    }
}
