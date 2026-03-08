'use client';

import { FormEvent, useMemo, useState } from 'react';
import { crisisTerms } from '@/lib/constants';

type Msg = { role: 'user' | 'assistant'; content: string };

const quickPrompts = ['I feel hopeless', 'Help me as a husband', 'Help me as a wife', 'I struggle with purity', 'I am angry at God', 'I need to confess'];

export default function GracePage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [crisisDetected, setCrisisDetected] = useState(false);

  const clientCrisis = useMemo(
    () => crisisTerms.some((term) => input.toLowerCase().includes(term)),
    [input]
  );

  const send = async (text?: string) => {
    const message = (text ?? input).trim();
    if (!message) return;
    setLoading(true);
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: message }]);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: messages })
      });
      const data = (await res.json()) as { reply: string; crisis: boolean };
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      setCrisisDetected(data.crisis);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await send();
  };

  return (
    <section className="space-y-4">
      <h1 className="section-title text-gold">Grace Companion</h1>
      {(clientCrisis || crisisDetected) && (
        <div className="rounded-lg border border-crimson bg-[#3b0b0b]/90 p-4">
          <p className="font-semibold">You are deeply loved, and your life is sacred. If you are in danger, call 988 now.</p>
        </div>
      )}
      <div className="min-h-[360px] space-y-3 rounded-xl border border-border bg-surface p-4">
        {messages.length === 0 && <p className="text-muted">Grace is interceding… 🕯️ Share your heart.</p>}
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[88%] rounded-lg p-3 ${m.role === 'user' ? 'ml-auto bg-[#2A0808]' : 'border-l-4 border-gold bg-bg'}`}>
            <p>{m.content}</p>
          </div>
        ))}
        {loading && <p className="text-sm text-muted">Grace is interceding… 🕯️</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        {quickPrompts.map((qp) => (
          <button key={qp} onClick={() => send(qp)} className="rounded-full border border-border px-3 py-1 text-xs hover:border-gold">
            {qp}
          </button>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-md border border-border bg-surface px-3 py-2 outline-none focus:border-gold"
          placeholder="Share what's on your soul..."
        />
        <button className="rounded-md bg-gold px-4 py-2 text-bg shadow-candle">🕊</button>
      </form>
    </section>
  );
}
