import type { Metadata } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';
import './globals.css';

const inter = DM_Sans({ subsets: ['latin'] });
const poppins = Poppins({
  style: 'normal',
  weight: '600',
  variable: '--poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Enoobs',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
