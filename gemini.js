const { GoogleGenerativeAI } = require("@google/generative-ai");
const env = require('dotenv');
env.config();


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `The following is a conversation from a discord channel group chat. 
                Create a simple, formatted schedule from the events the group chat members have planned. 
                Prioritize simplicity. Use a table format that has a good design in Discord. Do not title the table. Do not include events that have already passed.\n\n`;

let getSched = async function(logs){
    let fullPrompt = prompt + logs;
    const result = await model.generateContent(fullPrompt);
    return result.response.text();
}

// (async () => {
//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
// })();

module.exports = getSched;