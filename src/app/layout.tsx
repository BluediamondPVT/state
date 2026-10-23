import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Taimur Real Estate | Verified Flats, Heavy Deposit & Industrial Galas in Bhiwandi',
  description:
    'Taimur Real Estate: 10+ Years of Ground Trust. Verified 1 BHK, 2 BHK flats, Heavy Deposit zero-rent apartments, and industrial galas across Millat Nagar, Chavindra, VP Naka, Dhamankar Naka, and Bhiwandi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/favicon2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/layerslider.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/control.css" />
      </head>
      <body className="home-page">
        <div id="page_wrapper">
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
