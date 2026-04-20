import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LPK MUGIWARA - Belajar & Kerja di Jepang',
  description: 'Platform pelatihan kerja berbasis blended learning yang membantu tenaga kerja Indonesia mempersiapkan diri untuk bekerja di Jepang.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
