import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Luxury Jewelry Collection |Rshree',
  description: 'Discover our exquisite collection of fine jewelry, diamonds, and precious gems crafted with exceptional artistry and elegance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-offwhite">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}