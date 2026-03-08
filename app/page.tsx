import Link from 'next/link';

const tiles = [
  ['✝️ Grace', '/grace'],
  ['📔 Journal', '/journal'],
  ['🧠 Weapons', '/weapons'],
  ['👤 Identity', '/identity'],
  ['🕯️ Community', '/community'],
  ['💝 Donate', '/donate']
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="grain relative overflow-hidden rounded-xl border border-border bg-surface p-6">
        <h1 className="section-title mb-4 text-xl text-gold">Daily Scripture</h1>
        <p className="scripture text-2xl leading-relaxed">[Matthew 11:28] "Come to me, all you who are weary and burdened, and I will give you rest."</p>
      </section>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="section-title mb-3 text-sm text-gold">How is your soul today?</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {['💔 Desolate', '😔 Heavy-hearted', '😐 Wandering', '🙂 Hopeful', '🙏 Surrendered', '✝️ At Peace'].map((mood) => (
            <button key={mood} className="rounded-md border border-border bg-bg px-3 py-2 text-left hover:border-gold hover:shadow-candle">
              {mood}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {tiles.map(([name, href]) => (
          <Link key={name} href={href} className="rounded-lg border-l-4 border-gold border-y border-r border-border bg-surface p-4 hover:scale-[1.02] hover:shadow-candle">
            {name}
          </Link>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h3 className="section-title text-sm text-gold">Saint Quote</h3>
        <p className="mt-2 text-muted">"Pray, hope, and don’t worry." — St. Padre Pio</p>
      </section>

      <section className="rounded-xl border border-crimson bg-[#2A0808] p-4">
        <p className="font-semibold text-text">Struggling? You matter to God.</p>
        <a className="scripture mt-1 inline-block" href="tel:988">
          Call 988 Suicide &amp; Crisis Lifeline
        </a>
      </section>
    </div>
  );
}
