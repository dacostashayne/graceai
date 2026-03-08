'use client';

import { useState } from 'react';

const identities = [
  'I am a Man seeking to become a Biblical Man',
  'I am a Woman seeking to become a Biblical Woman',
  'I am a Husband seeking to love as Christ loved the Church',
  'I am a Wife seeking to build a God-honoring marriage',
  'I am struggling with depression / anxiety / emptiness',
  'I am new to the Catholic faith'
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="space-y-6 rounded-xl border border-border bg-surface p-6">
      {step === 1 && (
        <div className="space-y-4 text-center">
          <div className="text-5xl text-gold">✝</div>
          <p className="scripture text-2xl">"Come to me, all you who are weary and burdened, and I will give you rest."</p>
          <p className="text-muted">— Matthew 11:28</p>
          <p>GraceAI is a free space to heal, grow, and surrender to Jesus Christ.</p>
          <button className="rounded-md bg-gold px-4 py-2 text-bg shadow-candle" onClick={() => setStep(2)}>Begin My Journey</button>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="section-title text-gold">God made you with purpose</h2>
          {identities.map((item) => (
            <label key={item} className="flex gap-2 rounded-md border border-border p-3">
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() =>
                  setSelected((s) => (s.includes(item) ? s.filter((i) => i !== item) : [...s, item]))
                }
              />
              <span>{item}</span>
            </label>
          ))}
          <button className="rounded-md bg-gold px-4 py-2 text-bg" onClick={() => setStep(3)}>Continue</button>
        </div>
      )}
      {step === 3 && (
        <div className="space-y-4 text-center">
          <h2 className="section-title text-gold">Your covenant</h2>
          <p>Before we begin, make this your prayer:</p>
          <p className="scripture text-2xl">Lord Jesus, I surrender my wounds, my fears, and my future to You. Form me in truth, heal me in mercy, and lead me in holiness. Amen.</p>
          <button className="rounded-md bg-gold px-4 py-2 text-bg">I Surrender — Begin</button>
        </div>
      )}
      <p className="text-xs text-muted">GraceAI is not a substitute for professional mental health care. If you are in immediate danger, call 911.</p>
    </div>
  );
}
