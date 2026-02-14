import type { Metadata } from 'next';
import { Playfair_Display, Space_Mono, Inter } from 'next/font/google';
import Tribute from './components/Tribute';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Isaac Felix',
  description: 'AI safety researcher, quantitative analyst, and M.S. Computer Science candidate at Georgia Tech.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${spaceMono.variable} ${inter.variable}`}>
        {children}
        <Tribute />
      </body>
    </html>
  );
}
