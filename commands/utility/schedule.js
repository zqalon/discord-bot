const { SlashCommandBuilder, AttatchmentBuilder, InviteTargetType } = require('discord.js');
const getSched = require('../../gemini');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('schedule')
		.setDescription('Reads recent messages in this channel and forms a schedule.'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });

		const limit = 100;

		try{

			const messages = await interaction.channel.messages.fetch({ limit });

			//format logs
			

			let logData = `Server logs for #${interaction.channel.name}\n\n`;
			messages.reverse().forEach(msg => {
				const pacificTime = new Intl.DateTimeFormat('en-US', {
					timeZone: 'America/Los_Angeles',
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					hour12: false
				}).format(msg.createdAt);

				logData += `[${pacificTime}] ${msg.author.tag}: ${msg.content}\n`;
			});

			let schedule = await getSched(logData);

			await interaction.editReply({ content: `${schedule}`});

		} catch(error){
			console.error(error);
			await interaction.editReply(`There was an error while forming the schedule:\n\`${error.message}\``);
		}
	},
};