import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const { amountCents = 500 } = (await req.json()) as { amountCents?: number };

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ ok: true, mocked: true, amountCents });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: amountCents,
          product_data: { name: 'GraceAI Mission Donation' }
        }
      }
    ],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel'
  });

  return NextResponse.json({ ok: true, sessionId: session.id, url: session.url });
}
