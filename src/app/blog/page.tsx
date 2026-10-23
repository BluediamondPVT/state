import type { Metadata } from 'next';
import BlogBanner from '@/components/blog/BlogBanner';
import BlogListGrid from '@/components/blog/BlogListGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { BLOG_POSTS } from '@/data/blogs';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Bhiwandi Property Guides & Market Trends | Taimur Real Estate',
  description:
    'Expert insights into Bhiwandi real estate: Metro Line 5 infrastructure impact, Heavy Deposit vs Rent analysis, and Dhamankar Naka property trends.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Bhiwandi Real Estate Blog & Market Guides | Taimur Real Estate',
    description:
      'Stay updated with Bhiwandi property trends, Metro Line 5 progress, and heavy deposit savings guides.',
    url: `${SITE_URL}/blog`,
    type: 'website',
    images: ['/assets/images/banner/hero1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhiwandi Real Estate Blog & Market Guides',
    description: 'Bhiwandi property rates, metro impact, and heavy deposit advisory.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function BlogPage() {
  return (
    <main className="bg-light">
      {/* 1. Header Banner */}
      <BlogBanner />

      {/* 2. Main Content Grid */}
      <div className="full-row py-5 bg-white">
        <div className="container py-3">
          <div className="row g-4">
            {/* Left Articles Grid */}
            <div className="col-lg-8">
              <BlogListGrid posts={BLOG_POSTS} />
            </div>

            {/* Right Topic & Assistance Sidebar */}
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
