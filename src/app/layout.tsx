import { Fraunces, Geist, Geist_Mono } from 'next/font/google';
import Navigation from './components/Navigation';
import Tribute from './components/Tribute';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'], // Enable soft/wonk axes for character
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
      <body className={`${fraunces.variable} ${geistMono.variable} ${geistSans.variable}`}>
        <Navigation />
        {children}
        <Tribute />
      </body>
    </html>
  );
}
