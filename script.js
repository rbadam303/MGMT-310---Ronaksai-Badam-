async function analyzeFinance() {
    const input = document.getElementById('userInput').value;
    const resultSection = document.getElementById('resultSection');
    const outputContent = document.getElementById('outputContent');
    const loading = document.getElementById('loading');
    
    // !!! PASTE YOUR OPENAI API KEY HERE !!!
    const apiKey = "sk-proj-xxxxxxxxxxxxxxxxxxxxxxxx"; 

    if (!input.trim()) {
        alert("Please enter some text to analyze.");
        return;
    }

    loading.classList.remove('hidden');
    resultSection.classList.add('hidden');

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o", // or "gpt-3.5-turbo"
                messages: [
                    {
                        role: "system", 
                        content: "You are an expert financial analyst. Analyze the user's input using financial theory (CAPM, Market Efficiency, etc.). Keep it concise and strategic."
                    },
                    {
                        role: "user", 
                        content: input
                    }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();

        // Check for errors from OpenAI
        if (data.error) {
            throw new Error(data.error.message);
        }

        // Display the answer
        const aiAnswer = data.choices[0].message.content;
        outputContent.textContent = aiAnswer; 
        resultSection.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        alert("Error: " + error.message);
    } finally {
        loading.classList.add('hidden');
    }
}
