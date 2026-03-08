import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { crisisTerms, graceSystemPrompt } from '@/lib/constants';

type Incoming = { message: string; history?: { role: 'user' | 'assistant'; content: string }[] };

export async function POST(req: Request) {
  const body = (await req.json()) as Incoming;
  const lower = body.message.toLowerCase();
  const quickCrisis = crisisTerms.some((t) => lower.includes(t));

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    const fallback = quickCrisis
      ? '##CRISIS## I am with you. Your life is sacred. Please call 988 now, and if you are in immediate danger call 911.'
      : 'I am here with you. Share what feels heaviest, and we can take one faithful step at a time.';
    return NextResponse.json({ reply: fallback, crisis: quickCrisis });
  }

  const client = new Anthropic({ apiKey: key });
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 700,
    system: graceSystemPrompt,
    messages: [...(body.history ?? []), { role: 'user', content: body.message }]
  });

  const text = response.content.map((c) => ('text' in c ? c.text : '')).join('\n');
  return NextResponse.json({ reply: text, crisis: quickCrisis || text.includes('##CRISIS##') });
}
