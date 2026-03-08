const tools = [
  { title: 'Renew Your Mind', desc: '6-step thought record rooted in Romans 12:2.' },
  { title: 'Be Still', desc: '4-7-8 sacred breathing with prayer overlay.' },
  { title: 'This Present Moment', desc: '5-4-3-2-1 grounding with sacred prompts.' },
  { title: 'Offer Your Thanksgiving', desc: 'Gratitude altar with 3 gifts and candle response.' }
];

export default function WeaponsPage() {
  return (
    <section className="space-y-4">
      <h1 className="section-title text-gold">Put on the full armor of God</h1>
      <p className="scripture">[Ephesians 6:11] "Put on the full armor of God so that you can take your stand against the devil’s schemes."</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <article key={tool.title} className="rounded-xl border-l-4 border-gold border border-border bg-surface p-4">
            <h2 className="section-title text-xs text-gold">{tool.title}</h2>
            <p className="mt-2 text-muted">{tool.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
