import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogs';

interface Props {
  post: BlogPost;
}

export default function BlogArticleHeader({ post }: Props) {
  return (
    <div
      className="full-row inner-page-banner"
      style={{ backgroundColor: '#282838', padding: '60px 0 50px' }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title-wrapper d-lg-flex flex-column gap-2 text-white">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2 bg-transparent p-0 text-white-50">
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-white-50 text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/blog" className="text-white-50 text-decoration-none">
                      Blog
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    {post.category}
                  </li>
                </ol>
              </nav>
              <span
                className="badge px-3 py-2 text-uppercase mb-2 align-self-start"
                style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}
              >
                {post.category}
              </span>
              <h1
                className="page-title text-white fw-bold mb-2"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  maxWidth: '850px',
                  fontSize: '32px',
                  lineHeight: '1.3',
                }}
              >
                {post.title}
              </h1>
              <div className="d-flex align-items-center gap-3 text-white-50 small">
                <span>
                  <i className="fa-regular fa-user me-1 text-white"></i> By {post.author} (
                  {post.authorRole})
                </span>
                <span>•</span>
                <span>
                  <i className="fa-regular fa-calendar-days me-1 text-white"></i> {post.date}
                </span>
                <span>•</span>
                <span>
                  <i className="fa-regular fa-clock me-1 text-white"></i> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
