import 'bootstrap-icons/font/bootstrap-icons.css';

import './styles/globals.css';
import './styles/footer-grid.css';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



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
        className={`${ubuntu.className}, bg-white`}
      >
      <Navbar/>
      <div className="mx-2">
        {children}
      </div>
      <Footer/>
      </body>
    </html>
  );
}
