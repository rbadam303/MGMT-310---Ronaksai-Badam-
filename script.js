async function analyzeFinance() {
    const input = document.getElementById('userInput').value;
    const resultSection = document.getElementById('resultSection');
    const outputContent = document.getElementById('outputContent');
    const loading = document.getElementById('loading');
    
    // 1. Validation
    if (!input.trim()) {
        alert("Please enter some text to analyze.");
        return;
    }

    // 2. Show Loading State
    loading.classList.remove('hidden');
    resultSection.classList.add('hidden');

    try {
        // 3. Send Data to n8n Webhook
        // REPLACE THIS URL with your Production URL from n8n
        const response = await fetch('YOUR_N8N_WEBHOOK_URL_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: input })
        });

        const data = await response.json();

        // 4. Display Result
        // Assuming n8n returns a JSON object like { "response": "The WACC is..." }
        outputContent.textContent = data.response; 
        resultSection.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        alert("Failed to connect to the AI analyst. Check console for details.");
    } finally {
        loading.classList.add('hidden');
    }
}
