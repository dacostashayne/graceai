const categories = ['Depression & Healing', 'Marriage & Family', 'Purity & Temptation', 'Faith & Doubt', 'Gratitude'];

export default function CommunityPage() {
  return (
    <section className="space-y-4">
      <h1 className="section-title text-gold">Where two or three are gathered</h1>
      <p className="scripture">"For where two or three gather in my name, there am I with them." — Matthew 18:20</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <span key={c} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{c}</span>
        ))}
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((idx) => (
          <article key={idx} className="rounded-lg border-l-4 border-gold border border-border bg-surface p-4">
            <p className="text-sm">Anonymous prayer request #{idx}. Lord, bring healing and peace to this soul.</p>
            <button className="mt-3 rounded-md border border-border px-3 py-1 text-xs hover:border-gold">🕯️ Praying — {idx * 11} souls</button>
          </article>
        ))}
      </div>
    </section>
  );
}
