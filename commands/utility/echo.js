const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with an Echo!')
		.addStringOption(option => 
			option.setName('message')
				.setDescription('The message to echo back')
				.setRequired(true)
		),
	async execute(interaction) {
		const message = interaction.options.getString('message');
		await interaction.reply(`You said: ${message}`);
	},
};