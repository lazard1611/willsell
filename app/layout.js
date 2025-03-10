import "./globals.css";
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';

export const metadata = {
  title: "Willsell",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="wrapper">

          <main className="main">
            {children}
          </main>

          <Footer/>
        </div>
      </body>
    </html>
  );
}
