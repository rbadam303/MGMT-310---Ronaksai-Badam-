async function analyzeFinance() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const resultSection = document.getElementById('resultSection');
    const outputContent = document.getElementById('outputContent');
    const loading = document.getElementById('loading');

    // 1. Show Loading Animation (to make it look real)
    loading.classList.remove('hidden');
    resultSection.classList.add('hidden');

    // 2. Fake a delay (wait 2 seconds)
    await new Promise(r => setTimeout(r, 2000));

    loading.classList.add('hidden');
    resultSection.classList.remove('hidden');

    // 3. The "Fake" AI Brain
    if (input.includes("netflix") || input.includes("nflx")) {
        outputContent.textContent = `*** AI ANALYSIS: NETFLIX (NFLX) ***\n\n1. CAPM Valuation:\nBased on a Beta of 1.25, Risk-Free Rate of 3.2%, and Market Premium of 7.3%:\nRequired Return (Ke) = 3.2% + 1.25(7.3%) = 12.33%\n\n2. Market Efficiency Check:\nWhile the intrinsic value assumes steady growth, the current market price is exhibiting "Post-Earnings Announcement Drift."\n\nRecommendation:\nThe stock is technically undervalued based on DCF, but behavioral momentum suggests high short-term volatility. Wait for the drift to stabilize before entering.`;
    } else {
        // Fallback for any other question
        outputContent.textContent = `*** AI ANALYSIS ***\n\nBased on the financial data provided, the asset appears to be trading at a premium relative to its historical beta.\n\nKey Metrics Identified:\n- Systematic Risk (Beta): High\n- Market Sentiment: Bearish\n\nPlease provide more specific ticker data for a detailed CAPM breakdown.`;
    }
}
