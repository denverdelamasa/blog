import './styles/globals.css';

import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ubuntu.className}
      >
        {children}
      </body>
    </html>
  );
}
