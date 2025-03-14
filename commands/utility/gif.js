const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gif')
		.setDescription('Sends a random gif!')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('The gif category')
				.setRequired(true)
				.addChoices(
					{ name: 'Funny', value: 'gif_funny' },
					{ name: 'Meme', value: 'gif_meme' },
					{ name: 'Movie', value: 'gif_movie' }
				)
		),
	async execute(interaction) {
		// Get the user's choice
		const category = interaction.options.getString('category');

		// Map categories to GIF URLs
		const gifs = {
			gif_funny: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
			gif_meme: 'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif',
			gif_movie: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
		};

		// Retrieve the correct GIF based on the user's choice
		const gifUrl = gifs[category] || 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif';

		// Send the GIF in response (visible only to the user)
		await interaction.reply({ content: `Here's a ${category.replace('gif_', '')} GIF!`, files: [gifUrl], ephemeral: true });
	},
};
