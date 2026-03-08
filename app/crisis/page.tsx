import Link from 'next/link';

export default function CrisisPage() {
  return (
    <section className="rounded-xl border border-crimson bg-gradient-to-b from-[#8B1A1A] to-bg p-6 text-center">
      <h1 className="section-title text-xl text-text">You are not forgotten</h1>
      <p className="scripture mt-4 text-2xl">"Can a mother forget the baby at her breast? Though she may forget, I will not forget you!" — Isaiah 49:15</p>
      <div className="mt-6 grid gap-3 text-left">
        <a className="rounded-md border border-crimson bg-[#1a0f0f] p-3" href="tel:988">988 Suicide & Crisis Lifeline</a>
        <a className="rounded-md border border-crimson bg-[#1a0f0f] p-3" href="sms:741741&body=HOME">Crisis Text Line: Text HOME to 741741</a>
        <a className="rounded-md border border-crimson bg-[#1a0f0f] p-3" href="tel:18004488489">Catholic Charities: 1-800-448-8489</a>
        <a className="rounded-md border border-crimson bg-[#1a0f0f] p-3" href="tel:911">Emergency: 911</a>
      </div>
      <Link href="/grace" className="mt-6 inline-block rounded-md bg-gold px-4 py-2 text-bg shadow-candle">Talk to Grace</Link>
      <p className="scripture mt-6">[Psalm 34:18] "The Lord is close to the brokenhearted and saves those who are crushed in spirit."</p>
    </section>
  );
}
