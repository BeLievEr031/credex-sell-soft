const OPENAI_API_KEY = 'sk-proj-...'; // 🚨 Remove this from frontend before going live

// Define hardcoded responses
const examples: Record<string, string> = {
    'how do i sell my license': 'To sell your license, go to your profile > My Licenses > Sell.',
    'how can i contact support': 'You can reach support by emailing help@example.com or visiting our support center.',
    'what are your business hours': 'Our team is available from 9am to 6pm (Mon–Fri).',
    'do you offer refunds': 'Yes, we offer refunds within 14 days of purchase, subject to our refund policy.',
    'can i upgrade my plan': 'Absolutely! Go to the Pricing page and select your new plan.',
}

// Normalize and match input
function findHardcodedAnswer(message: string): string | null {
    const normalized = message.toLowerCase().trim()
    for (const question in examples) {
        if (normalized.includes(question)) return examples[question]
    }
    return null
}

export async function askAI(message: string): Promise<string> {
    const hardcoded = findHardcodedAnswer(message)
    if (hardcoded) return hardcoded

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful customer support assistant.' },
                    { role: 'user', content: message },
                ],
                temperature: 0.7,
            }),
        })

        const data = await res.json()
        console.log('[OpenAI API Response]', data)

        // If OpenAI error (like quota), fallback
        if (data?.error) throw new Error(data.error.message)

        return data?.choices?.[0]?.message?.content?.trim() || "I'm sorry, I didn’t understand."
    } catch (err) {
        console.error('[Chat AI Error]', err)
        return "Sorry, I'm currently unavailable. Please contact support directly."
    }
}
