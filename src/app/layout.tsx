import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Nunito } from 'next/font/google';
import 'aos/dist/aos.css'
import AOSProvider from './components/AOSProvider'

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'KKN Tematik Literasi',
  description: 'Glorifikasi Kelompok KKN Tematik Literasi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={nunito.className + " position-relative"}>

        {/* ✅ LAYER OVERLAY */}
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url(background.jpeg)',
            opacity: 0.1,
            zIndex: -1,
          }}
        ></div>

        <AOSProvider>
          <Navbar />
          <main className="py-4">{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
