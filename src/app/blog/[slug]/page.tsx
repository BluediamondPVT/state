import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticleHeader from '@/components/blog/BlogArticleHeader';
import BlogArticleContent from '@/components/blog/BlogArticleContent';
import BlogReaderSidebar from '@/components/blog/BlogReaderSidebar';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, getBlogPostingJsonLd } from '@/lib/seo';
import { BLOG_POSTS } from '@/data/blogs';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | Taimur Real Estate' };

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

  return {
    title: `${post.title} | Taimur Real Estate Advisory`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Taimur Real Estate`,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const schemaData = getBlogPostingJsonLd(post, canonicalUrl);
  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <main className="bg-light">
      {/* Schema.org BlogPosting Structured Data */}
      <JsonLd data={schemaData} />

      {/* 1. Article Header Banner */}
      <BlogArticleHeader post={post} />

      {/* 2. Main Reader Content */}
      <div className="full-row py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5">
            {/* Left Body Article */}
            <div className="col-lg-8">
              <BlogArticleContent post={post} />
            </div>

            {/* Right Interactive Sidebar */}
            <div className="col-lg-4">
              <BlogReaderSidebar currentPost={post} recentPosts={recentPosts} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
