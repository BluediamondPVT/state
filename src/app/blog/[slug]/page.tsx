import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticleHeader from '@/components/blog/BlogArticleHeader';
import BlogArticleContent from '@/components/blog/BlogArticleContent';
import BlogReaderSidebar from '@/components/blog/BlogReaderSidebar';
import { BLOG_POSTS } from '@/data/blogs';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | Bhiwandi Estate' };

  return {
    title: `${post.title} | Bhiwandi Estate Advisory`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <main className="bg-light">
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
