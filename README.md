# Vengoz Discord Bot
A simple discord multi-purpose bot, perfect for any kind of digital service.
The Discord Bot includes features such as ticket commands, moderation & fun commands.

**📑 | Installation:**

1) Download all files, save them all in the same folder.
2) Put your discord bot token into the .env file, right after the equal sign.
3) Open the files in your preferred IDE such as Visual Studio Code & change these 3 values:
- LockCommand.js   | const role = message.guild.roles.cache.get('MEMBERROLEID') [Line 12]
- UnlockCommand.js | const role = message.guild.roles.cache.get('MEMBERROLEID') [Line 12]
- NewCommand.js      | channel.setParent('TICKETCATEGORYID') [Line 13]
4) NPM Packages I've been using are "slappey", "nodemon" & "moment". Install them by opening a console window in the main folder & executing the following lines:
- npm i slappey
- npm i nodemon
- npm i moment
5) Done! Run the bot by typing "npm run dev" in the command window, opened in the folder.

**📪 | Support:**

- If you have any questions or run into any problems, feel free to contact me on Discord. 
- Tag: snow#0911
