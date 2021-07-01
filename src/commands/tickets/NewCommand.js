const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );

module.exports = class NewCommand extends BaseCommand
{
    constructor()
    {
        super( 'new', 'tickets', [] );
    }

    async run( client, message, args )
    {

        let creator = message.author;
        let channel = await message.guild.channels.create(
            `ticket-${creator.tag}` );
        channel.setParent( 'TICKETCATEGORYID' )
        channel.updateOverwrite( message.guild.id
        , {
            SEND_MESSAGE: false
            , VIEW_CHANNEL: false
        } )
        channel.updateOverwrite( message.author
        , {
            SEND_MESSAGE: true
            , VIEW_CHANNEL: true
            , ATTACH_FILES: true
        } )

        let reason = args.slice( 0 )
            .join( " " );

        if ( !reason ) reason = 'No reason given.';

        const createdEmbed = new Discord.MessageEmbed()
            .setTitle( 'Thank you for contacting the support.' )
            .setDescription(
                `We will be with you soon.\nReason: **${reason}**` )
            .setFooter( `Developed by snow#0911`
                , "https://cdn.discordapp.com/attachments/819289862423052348/828543357118447626/41353254f750a9e8c4750fe90b9bc2e3.jpg"
            )
            .setColor( '#007ACC' )

        let memberping = await channel.send( '<@' + message.author.id +
            ">" );
        setTimeout( () => memberping.delete(), 1000 );
        let infomsg = await channel.send( createdEmbed );

    }
}
