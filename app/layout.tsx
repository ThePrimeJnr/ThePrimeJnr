import type { Metadata } from 'next';

import fonts from '@/lib/fonts';
import ProviderTheme from '@/lib/provider/provider-theme';
import getMetadata from '@/lib/utils/metadata';

import Body from '@/components/layouts/body';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';

import './globals.css';

export const metadata: Metadata = getMetadata('default');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fonts.publicSans.className} antialiased min-h-screen font-mono`}
      >
        <ProviderTheme>
          <Navbar />
          <Body>{children}</Body>
          <Footer />
        </ProviderTheme>
      </body>
    </html>
  );
}
