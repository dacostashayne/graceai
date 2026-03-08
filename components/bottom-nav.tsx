'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/constants';

export function BottomNav() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-[#0A0705ee] backdrop-blur-sm">
      <ul className="mx-auto grid max-w-4xl grid-cols-6 gap-1 px-2 py-2 text-center">
        {navItems.map((item) => {
          const active = path === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center rounded-md px-1 py-2 text-xs transition ${
                  active ? 'text-gold' : 'text-muted hover:text-text'
                }`}
              >
                <span>{item.icon}</span>
                <span className="section-title text-[10px] tracking-wide">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
