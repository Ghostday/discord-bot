// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS], });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  switch (commandName) {
    case 'ping':
      await interaction.reply('Pong!');
      break;
    case 'server':
      await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
      break
    case 'user':
      await interaction.reply(`User Tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
      break
    default:
      break
  }

});


// Login to Discord with your client's token
client.login(token);