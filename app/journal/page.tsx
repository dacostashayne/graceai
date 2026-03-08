const prompts = [
  "Where did you feel God's presence today?",
  'What are you carrying that you need to lay at the Cross?',
  'What sin or wound needs healing today?',
  'What is God asking you to trust Him with?'
];

export default function JournalPage() {
  return (
    <section className="space-y-4">
      <h1 className="section-title text-gold">Examination of the soul</h1>
      <p className="scripture text-xl">"Search me, God, and know my heart." — Psalm 139:23</p>
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="mb-3 section-title text-xs text-gold">Mood</p>
        <div className="grid grid-cols-2 gap-2">
          {['💔 Desolate', '😔 Heavy-hearted', '😐 Wandering', '🙂 Hopeful', '🙏 Surrendered', '✝️ At Peace'].map((m) => (
            <button key={m} className="rounded border border-border p-2 text-left hover:border-gold">{m}</button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="mb-2 section-title text-xs text-gold">Reflection prompts</p>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          {prompts.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <textarea className="mt-4 h-40 w-full rounded-md border border-border bg-bg p-3 leading-8" placeholder="Write your prayer and reflection..." />
      </div>
    </section>
  );
}
