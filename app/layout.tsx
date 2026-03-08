import type { Metadata } from 'next';
import { Cinzel, EB_Garamond, Crimson_Text } from 'next/font/google';
import './globals.css';
import { BottomNav } from '@/components/bottom-nav';
import { Header } from '@/components/header';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' });
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' });
const crimson = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-crimson' });

export const metadata: Metadata = {
  title: 'GraceAI',
  description: 'Catholic faith-based mental wellness and discipleship sanctuary'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${garamond.variable} ${crimson.variable}`}>
        <Header />
        <main className="mx-auto max-w-4xl px-4 pb-24 pt-6">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
