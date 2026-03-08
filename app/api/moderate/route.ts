import { NextResponse } from 'next/server';

const blocked = [/hate/i, /kill\s+them/i, /violent/i];

export async function POST(req: Request) {
  const { content } = (await req.json()) as { content: string };
  const flagged = blocked.some((pattern) => pattern.test(content));
  return NextResponse.json({ allowed: !flagged, flagged });
}
