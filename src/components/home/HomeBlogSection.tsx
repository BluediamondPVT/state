import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/blogs';

export default function HomeBlogSection() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="full-row bg-light-gray" id="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <span className="color-primary tagline pb-2 d-table m-auto text-uppercase">
              Our Recent Posts &amp; Guides
            </span>
            <h3 className="color-dark mx-auto mb-5 text-center ls-1">
              Property Insights, Metro Updates &amp; Market Guides
            </h3>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-1 g-3">
          {featuredPosts.map((post) => (
            <div className="col" key={post.id}>
              <div className="post-block-1 entry-post h-100 bg-white rounded-3 shadow-sm overflow-hidden">
                <div className="entry-wrapper">
                  <div className="entry-thumbnail">
                    <Link href={`/blog/${post.slug}`} className="d-block position-relative overflow-hidden" style={{ height: '220px' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-fit-cover"
                      />
                    </Link>
                  </div>
                  <div className="entry-content-wrapper p-3">
                    <div className="entry-header">
                      <div className="entry-title mb-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="post-title fw-bold text-dark text-decoration-none"
                          style={{ fontSize: '16px', lineHeight: '1.4' }}
                        >
                          {post.title}
                        </Link>
                      </div>
                      <div className="entry-meta small text-muted mb-2 d-flex gap-3">
                        <span>
                          By <strong className="text-secondary">{post.author}</strong>
                        </span>
                        <span>
                          <i className="fa-regular fa-calendar-days me-1"></i>
                          {post.date}
                        </span>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p className="text-secondary small mb-3" style={{ lineHeight: '1.6' }}>
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="btn-link fw-semibold"
                        style={{ color: '#aa8453', fontSize: '14px' }}
                      >
                        Read Full Article &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
