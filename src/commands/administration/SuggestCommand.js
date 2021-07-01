const BaseCommand = require( '../../utils/structures/BaseCommand' );
const Discord = require( 'discord.js' );

module.exports = class SuggestCommand extends BaseCommand
{
    constructor()
    {
        super( 'suggest', 'administration', [] );
    }

    async run( client, message, args )
    {

        let sug = args.slice( 0 )
            .join( " " );

        // After you give no suggestion, this message will print
        if ( !sug ) return message.channel.send(
            'No suggestion given, please try again. (e.g. ?suggest suggestion)'
        )

        // Success message (after you successfully add suggestion)
        const Embed = new Discord.MessageEmbed()
            .setTitle( `Suggestion: ${sug}` )
            .setAuthor( `Suggested by ${message.author.username}` )
            .setColor( '#007ACC' )
            .setFooter( 'Developed by snow#0911', message.author.displayAvatarURL(
            {
                dynamic: true
            } ) )

        // Reactions, you can change them if you feel like.
        message.channel.send( Embed )
            .then( sentmsg => sentmsg.react( '⬆️' ) )
            .then( reaction => reaction.message.react( '⬇️' ) );
    }
}
