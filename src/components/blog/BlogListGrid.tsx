import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';
import { AGENCY_CONFIG } from '@/data/properties';

interface Props {
  posts: BlogPost[];
}

export default function BlogListGrid({ posts }: Props) {
  return (
    <div className="row g-4">
      {posts.map((post) => (
        <div key={post.id} className="col-12 col-md-6">
          <div className="post-block-1 entry-post h-100 border rounded-3 overflow-hidden shadow-sm d-flex flex-column bg-white">
            <Link
              href={`/blog/${post.slug}`}
              className="entry-thumbnail position-relative overflow-hidden d-block"
              style={{ height: '220px' }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-fit-cover"
              />
              <span
                className="position-absolute top-0 start-0 m-3 badge px-3 py-2 text-uppercase"
                style={{
                  backgroundColor: '#aa8453',
                  letterSpacing: '0.5px',
                  fontSize: '11px',
                }}
              >
                {post.category}
              </span>
            </Link>

            <div className="p-4 d-flex flex-column flex-grow-1">
              <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                <span>
                  <i
                    className="fa-regular fa-calendar-days me-1"
                    style={{ color: '#aa8453' }}
                  ></i>{' '}
                  {post.date}
                </span>
                <span>•</span>
                <span>
                  <i className="fa-regular fa-clock me-1" style={{ color: '#aa8453' }}></i>{' '}
                  {post.readTime}
                </span>
              </div>

              <h5
                className="fw-bold text-dark mb-2"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  lineHeight: '1.4',
                  fontSize: '18px',
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-dark text-decoration-none hover-color-primary"
                >
                  {post.title}
                </Link>
              </h5>

              <p
                className="text-secondary small mb-3 flex-grow-1"
                style={{ lineHeight: '1.6' }}
              >
                {post.excerpt}
              </p>

              <div className="pt-3 border-top d-flex justify-content-between align-items-center mt-auto">
                <span className="text-muted small">By {post.author}</span>
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hi, I read your article "${post.title}" and would like to learn more.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-link text-decoration-none fw-semibold p-0"
                  style={{ color: '#aa8453' }}
                >
                  Discuss with Agent <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
