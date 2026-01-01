import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: google('gemini-2.5-flash'), // Using Gemini 2.5 Flash model
        messages,
    });

    return result.toTextStreamResponse();
}
