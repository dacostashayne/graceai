const sections = [
  {
    title: 'Biblical Men',
    bullets: ['Daily virtue challenge', 'Accountability prompts', "The Warrior's Prayer", 'Purity and leadership teaching cards']
  },
  {
    title: 'Biblical Women',
    bullets: ['Proverbs 31 devotional', 'Daily virtue challenge', "The Queen's Prayer", 'Dignity and wisdom teaching cards']
  },
  {
    title: 'Biblical Husbands',
    bullets: ['Ephesians 5:25 anchor', 'Weekly sacrificial love challenge', 'Covenant vow reminder', 'Headship as servanthood']
  },
  {
    title: 'Biblical Wives',
    bullets: ['Proverbs 31:10-31 anchor', 'Weekly honor challenge', 'Submission as strength teaching', 'Build the domestic church']
  }
];

export default function IdentityPage() {
  return (
    <section className="space-y-4">
      <h1 className="section-title text-gold">Who God says you are</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {sections.map((s) => (
          <article key={s.title} className="rounded-xl border border-border bg-surface p-4">
            <h2 className="section-title text-xs text-gold">{s.title}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-muted">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
