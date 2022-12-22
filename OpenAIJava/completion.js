require('dotenv').config()
const OpenAI = require('openai-api');



const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

(async () => {
    const gptResponse = await openai.complete({
        engine: 'text-davinci-003',
        prompt: 'write a name for a dog',
        maxTokens: 6
        
    });

    console.log(gptResponse.data);
})();