import 'bootstrap-icons/font/bootstrap-icons.css';

import './styles/globals.css';
import './styles/footer-grid.css';
import './styles/aside-pattern.css';
import './styles/nav-dropdown.css';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AppLoaderWrapper from "@/components/AppLoaderWrapper";

import { Ubuntu, Outfit } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-outfit',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${outfit.variable} bg-white`}>
        <AppLoaderWrapper>
          <Navbar/>
            <div className="mx-2">
                {children}
            </div>
          <Footer/>
        </AppLoaderWrapper>
      </body>
    </html>
  );
}
