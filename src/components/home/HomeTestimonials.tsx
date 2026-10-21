import React from 'react';
import Image from 'next/image';

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      'Bhiwandi Estate helped us purchase a legally clean 2 BHK in Dhamankar Naka with zero hassle. Their loan team even got our SBI loan approved in just 6 days!',
    name: 'Sameer Qureshi',
    role: 'Business Owner • Dhamankar Naka Buyer',
    avatar: '/assets/images/user1.jpg',
  },
  {
    quote:
      'Finding a zero-rent Heavy Deposit flat in Anjur Phata was so easy with Imran bhai. Everything was biometrically registered at the sub-registrar office with complete paperwork clarity.',
    name: 'Kavita & Mahesh Patil',
    role: 'Heavy Deposit Tenant • Anjur Phata',
    avatar: '/assets/images/user2.jpg',
  },
  {
    quote:
      'We leased a 4,500 sq.ft industrial gala in Purna for our logistics firm. Vikas Patil ensured 3-phase power sanction and full 40ft container trailer road clearance before signing.',
    name: 'Farhan Ansari',
    role: 'Director • Apex Logistics Purna',
    avatar: '/assets/images/user3.jpg',
  },
];

export default function HomeTestimonials() {
  return (
    <div className="full-row bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 mb-5 text-center">
            <span
              className="color-primary tagline pb-2 d-table m-auto text-uppercase"
              style={{ letterSpacing: '1px' }}
            >
              Client Trust &amp; Reviews
            </span>
            <h3
              className="color-dark mx-auto mb-2 text-center"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              What Families &amp; Business Owners Say
            </h3>
            <p className="text-secondary small mb-0">
              Real experiences from verified buyers and tenants across Bhiwandi
            </p>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-1 g-4">
          {testimonials.map((t, idx) => (
            <div className="col" key={idx}>
              <div className="testimonial-block-1 transation h-100 hover-underline-animation bg-white p-4 rounded-4 shadow-sm">
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p>&quot;{t.quote}&quot;</p>
                <div className="d-flex align-items-center gap-3 mt-30">
                  <div className="image-avata">
                    <Image
                      className="rounded-circle me-2 object-fit-cover"
                      src={t.avatar}
                      alt={t.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="about-avata">
                    <div className="d-table fw-bold text-dark">{t.name}</div>
                    <span className="d-table designation small text-muted">
                      {t.role}
                    </span>
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
