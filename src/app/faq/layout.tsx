import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Taimur Real Estate Bhiwandi',
  description:
    'Answers to common real estate questions in Bhiwandi: How heavy deposit agreements work, bank loan approval processes, 80% privacy protection, and gala leasing.',
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: 'Bhiwandi Property FAQ | Taimur Real Estate',
    description: 'Frequently asked questions regarding flats, heavy deposits, and bank loans in Bhiwandi.',
    url: `${SITE_URL}/faq`,
    type: 'website',
    images: ['/assets/images/banner/hero1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhiwandi Property FAQ | Taimur Real Estate',
    description: 'Everything you need to know before renting or buying a property in Bhiwandi.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
