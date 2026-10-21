import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PropertyItem {
  type: string;
  typeClass: string;
  featured?: boolean;
  slug: string;
  img: string;
  price: string;
  period: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  garage: string;
  category: string;
  date: string;
}

const recentProperties: PropertyItem[] = [
  {
    type: 'For Rent',
    typeClass: 'sale',
    slug: 'spacious-2bhk-dhamankar-naka-bhiwandi',
    img: '/assets/images/property/property-grid-1.png',
    price: '$1850',
    period: ' / Monthly',
    title: 'Awesome Family Appartment',
    location: '4213 South Burlington, VT 05403',
    beds: 2,
    baths: 2,
    area: '1200 Sqft',
    garage: 'Yes',
    category: 'Appartment',
    date: 'June 12, 2023',
  },
  {
    type: 'For Sale',
    typeClass: 'sale',
    featured: true,
    slug: 'heavy-deposit-1bhk-anjur-phata-bhiwandi',
    img: '/assets/images/property/property-grid-2.png',
    price: '$120,5500',
    period: ' / Fixed',
    title: 'Luxury Condos Riverside',
    location: '2305 Frog Lane Overlandpk, MO 66210',
    beds: 7,
    baths: 5,
    area: '3200 Sqft',
    garage: 'Yes',
    category: 'Condos',
    date: 'June 17, 2023',
  },
  {
    type: 'For Rent',
    typeClass: 'rent',
    slug: 'low-downpayment-1bhk-temghar-bhiwandi',
    img: '/assets/images/property/property-grid-3.png',
    price: '$6500',
    period: ' / Monthly',
    title: 'Gorgeous Villa Bay View',
    location: '4213 South Burlington, VT 05403',
    beds: 2,
    baths: 2,
    area: '1200 Sqft',
    garage: 'Yes',
    category: 'Villa',
    date: 'June 22, 2023',
  },
  {
    type: 'For Rent',
    typeClass: 'rent',
    slug: 'industrial-commercial-gala-purna-mankoli',
    img: '/assets/images/property/property-grid-4.png',
    price: '$10500',
    period: ' / Monthly',
    title: 'New Condo For Rent',
    location: '4213 South Burlington, VT 05403',
    beds: 7,
    baths: 5,
    area: '1200 Sqft',
    garage: 'Yes',
    category: 'Condo',
    date: 'June 12, 2023',
  },
];

export default function RecentProperties() {
  return (
    <div className="full-row bg-light">
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <div className="align-items-center d-flex">
              <div className="me-auto">
                <h3 className="color-dark">Recent Properties</h3>
              </div>
              <Link href="/properties" className="ms-auto btn-link">
                View Properties
              </Link>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          {recentProperties.map((prop, idx) => (
            <div className="col" key={idx}>
              <div className="property-grid-1 property-block">
                <div className="entry-wrapper">
                  <div className="entry-thumbnail">
                    <div className="type">
                      <span className={`${prop.typeClass} text-white`}>
                        {prop.type}
                      </span>
                      {prop.featured && (
                        <span className="featured text-white">Featured</span>
                      )}
                    </div>
                    <ul className="quick-meta">
                      <li>
                        <a href="#" title="Add Compare">
                          <i className="fa-solid fa-shuffle"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Add Favourite">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </li>
                      <li className="md-mx-none">
                        <a
                          className="quick-view"
                          href="#quick-view"
                          title="Quick View"
                        >
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                      </li>
                    </ul>
                    <Link
                      href={`/properties/${prop.slug}`}
                      className="entry-thumbnail-image d-block position-relative overflow-hidden"
                      style={{ minHeight: '230px' }}
                    >
                      <Image
                        src={prop.img}
                        alt={prop.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-fit-cover"
                      />
                    </Link>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <span className="listing-price">
                        {prop.price}
                        <small>{prop.period}</small>
                      </span>
                      <h5 className="listing-title">
                        <Link href={`/properties/${prop.slug}`}>
                          {prop.title}
                        </Link>
                      </h5>
                      <span className="listing-location">
                        <i className="fas fa-map-marker-alt"></i> {prop.location}
                      </span>
                    </div>
                    <div className="entry-content">
                      <ul className="property-info">
                        <li title="Beds">
                          <span>
                            <i className="fa-solid fa-bed"></i>
                          </span>
                          {prop.beds}
                        </li>
                        <li title="Baths">
                          <span>
                            <i className="fa-solid fa-shower"></i>
                          </span>
                          {prop.baths}
                        </li>
                        <li title="Area">
                          <span>
                            <i className="fa-solid fa-vector-square"></i>
                          </span>
                          {prop.area}
                        </li>
                        <li title="Garage">
                          <span>
                            <i className="fa-solid fa-warehouse"></i>
                          </span>
                          {prop.garage}
                        </li>
                      </ul>
                    </div>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="property-type">
                          <a href="#">{prop.category}</a>
                        </div>
                        <div className="post-date">
                          <i className="fa-regular fa-calendar-days"></i>{' '}
                          <span>{prop.date}</span>
                        </div>
                      </div>
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
