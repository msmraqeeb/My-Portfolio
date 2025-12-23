import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import FloatingMenu from '@/components/floating-menu';

export const metadata: Metadata = {
  title: 'Shakil Mahmud',
  description: 'A professional, modern portfolio to showcase your work and skills.',
  icons: {
    icon: '/images/shakil-favi.ico',
    shortcut: '/images/shakil-favi.ico',
    apple: '/images/shakil-favi.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/shakil-favi.ico" />
        <link rel="icon" href="/images/shakil-favi.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/shakil-favi.ico" />
        <meta name="msapplication-TileImage" content="/images/shakil-favi.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingMenu />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
