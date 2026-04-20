import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harsh Patel | Supply Chain Analyst',
  description:
    'Supply Chain Analyst specializing in data-driven procurement, inventory optimization, and demand forecasting. MBA in Operations & SCM.',
  keywords: [
    'Supply Chain Analyst',
    'Procurement',
    'Data Analytics',
    'Power BI',
    'Operations',
    'Inventory Management',
  ],
  openGraph: {
    title: 'Harsh Patel | Supply Chain Analyst',
    description:
      'Turning supply chain complexity into competitive advantage through data-driven insights.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-dark-900 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
