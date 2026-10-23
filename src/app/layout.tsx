import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ToastProvider from '@/components/ToastProvider';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, getRealEstateAgentSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Taimur Real Estate | Verified Flats, Heavy Deposit & Industrial Galas in Bhiwandi',
    template: '%s | Taimur Real Estate Bhiwandi',
  },
  description:
    'Taimur Real Estate: 10+ Years of Ground Trust. Verified 1 BHK, 2 BHK flats, Heavy Deposit zero-rent apartments, and industrial galas across Millat Nagar, Chavindra, VP Naka, Dhamankar Naka, and Bhiwandi.',
  keywords: [
    'Real Estate Agent in Bhiwandi',
    'Taimur Real Estate',
    'Flats for sale in Bhiwandi',
    '1 BHK in Bhiwandi',
    '2 BHK in Bhiwandi',
    'Heavy deposit flat in Bhiwandi',
    'Zero rent heavy deposit flats',
    'Industrial gala for rent in Bhiwandi',
    'Godown for rent in Bhiwandi',
    'Dhamankar Naka flats',
    'Anjur Phata flats',
    'Millat Nagar Bhiwandi property',
    'Chavindra property rates',
  ],
  authors: [{ name: 'Taimur Real Estate', url: SITE_URL }],
  creator: 'Taimur Real Estate',
  publisher: 'Taimur Real Estate',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Taimur Real Estate Bhiwandi',
    title: 'Taimur Real Estate | Verified Flats, Heavy Deposit & Industrial Galas in Bhiwandi',
    description:
      'Taimur Real Estate: 10+ Years of Ground Trust. Verified 1 BHK, 2 BHK flats, Heavy Deposit zero-rent apartments, and industrial galas across Bhiwandi.',
    images: [
      {
        url: '/assets/images/banner/hero1.png',
        width: 1200,
        height: 630,
        alt: 'Taimur Real Estate - Bhiwandi Property Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taimur Real Estate | Verified Flats & Heavy Deposit in Bhiwandi',
    description:
      '10+ Years of Ground Trust in Bhiwandi. Verified 1 BHK, 2 BHK, Heavy Deposit & Industrial Galas.',
    images: ['/assets/images/banner/hero1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const agentSchema = getRealEstateAgentSchema();

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
        <JsonLd data={agentSchema} />
        <ToastProvider />
        <div id="page_wrapper">
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          {children}
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
