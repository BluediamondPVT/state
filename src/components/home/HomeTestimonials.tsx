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
      'Taimur Bhai helped our family buy a legally clear 2 BHK flat in Millat Nagar. Unhone bina kisi jhoothe waade ke municipal papers khud check karwaye aur loan bhi fast sanction karwaya!',
    name: 'Sameer Qureshi',
    role: 'Homeowner • Millat Nagar 1',
    avatar: '/assets/images/user1.jpg',
  },
  {
    quote:
      'Finding a zero-rent Heavy Deposit flat in Chavindra was completely stress-free with Taimur Real Estate. 100% legal biometric agreement karwaya with complete refundable security clarity.',
    name: 'Kavita & Mahesh Patil',
    role: 'Heavy Deposit Tenant • Chavindra',
    avatar: '/assets/images/user2.jpg',
  },
  {
    quote:
      'Purchased a prime commercial shop near VP Naka through Taimur Bhai. Honest deal, no hidden fees or advance pressure, and transparent registration support from day one.',
    name: 'Farhan Ansari',
    role: 'Business Owner • VP Naka (Varala Devi)',
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
              className="badge px-3 py-2 text-uppercase mb-2 text-white"
              style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}
            >
              ★ 4.9 Rating (150+ Happy Clients)
            </span>
            <h3
              className="color-dark mx-auto mb-2 text-center fw-bold"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              What Families &amp; Business Owners Say About Taimur Bhai
            </h3>
            <p className="text-secondary small mb-0">
              Verified ground feedback from buyers and tenants across Millat Nagar, Chavindra, VP Naka &amp; Bhiwandi
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
