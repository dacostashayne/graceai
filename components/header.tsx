import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-[#0A0705f0] px-4 py-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-gold">
          <span>✝</span>
          <span className="section-title text-sm">GraceAI</span>
        </Link>
        <Link href="/crisis" className="rounded-md bg-crimson px-3 py-2 text-xs font-semibold text-text hover:opacity-90">
          Crisis Help
        </Link>
      </div>
    </header>
  );
}
