import type { Metadata, Viewport } from 'next';
import { Newsreader, Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navigation from './components/Navigation';
import GhostGradient from './components/GhostGradient';
import Tribute from './components/Tribute';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz'], // critical for elegance at display sizes
});

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const description =
  'AI safety researcher, quantitative analyst, and M.S. Computer Science candidate at Georgia Tech.';

export const metadata: Metadata = {
  title: {
    default: 'Isaac Felix',
    template: '%s — Isaac Felix',
  },
  description,
  openGraph: {
    title: 'Isaac Felix',
    description,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#060608',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${geistMono.variable} ${geistSans.variable}`}>
        <a href="#content" className="skip-link">Skip to content</a>
        {/* Lives in the layout so the ambient field persists across navigations */}
        <GhostGradient />
        <Navigation />
        {children}
        <Tribute />
        <Analytics />
      </body>
    </html>
  );
}
