export default function DonatePage() {
  return (
    <section className="space-y-5">
      <h1 className="section-title text-gold">Sustain the mission</h1>
      <p className="scripture">"Give, and it will be given to you." — Luke 6:38</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {['Souls Helped: 1,287', 'Prayers Shared: 9,412', 'Crises Responded: 214'].map((item) => (
          <div key={item} className="rounded-lg border border-border bg-surface p-4 text-center">
            {item}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-surface p-4">
        <h2 className="section-title text-xs text-gold">Give</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {['$5', '$15', '$50', 'Custom'].map((v) => (
            <button key={v} className="rounded-md border border-border px-4 py-2 hover:border-gold">{v}</button>
          ))}
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-muted">
          <input type="checkbox" /> Monthly giving
        </label>
        <button className="mt-4 rounded-md bg-gold px-4 py-2 text-bg shadow-candle">Donate with Stripe</button>
      </div>
    </section>
  );
}
