import React from 'react';
import BlogBanner from '@/components/blog/BlogBanner';
import BlogListGrid from '@/components/blog/BlogListGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { BLOG_POSTS } from '@/data/blogs';

export const metadata = {
  title: 'Blog & Bhiwandi Real Estate Market Insights | Bhiwandi Estate',
  description:
    'Stay updated with Bhiwandi property trends, Metro Line 5 progress, heavy deposit guides, and industrial gala investment analysis.',
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
