import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryItem {
  icon: string;
  title: string;
  desc: string;
  link?: string;
}

const categories: CategoryItem[] = [
  {
    icon: '/assets/images/icon/living-room.png',
    title: 'Living House',
    desc: 'Preview listing of accommodation property living houses and hotels',
  },
  {
    icon: '/assets/images/icon/plot.png',
    title: 'Solid Land',
    desc: 'Hight listed solid use-able land in most popular area for development',
  },
  {
    icon: '/assets/images/icon/location.png',
    title: 'Office Floor',
    desc: "Preview most popular area's office building available in listing for rent and sale",
  },
  {
    icon: '/assets/images/icon/store.png',
    title: 'Commercial',
    desc: 'Find the commercial property for business and factory development',
  },
  {
    icon: '/assets/images/icon/rooms-available.png',
    title: 'Hostel Room',
    desc: 'If you are single looking for sinlge living, preview the hostel listing',
  },
  {
    icon: '/assets/images/icon/building.png',
    title: 'Appartment',
    desc: 'Family appartment, find your best appartment in our directory listing',
  },
  {
    icon: '/assets/images/icon/apartment.png',
    title: 'Condo House',
    desc: 'In our directory listing we have luxury living condos for rent and sale',
  },
  {
    icon: '/assets/images/icon/villa.png',
    title: 'Villa House',
    desc: 'Villa house is most popular and we have some amazing of this category listed',
  },
  {
    icon: '/assets/images/icon/hotel.png',
    title: 'Hotel Room',
    desc: 'Traveller people can find hotel here for accomodation in resonable price',
  },
];

export default function PropertyCategories() {
  return (
    <div className="full-row bg-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">
            <h3 className="text-center color-white">
              What You Area Looking For?
            </h3>
            <span className="d-table sub-title text-white mx-auto text-center">
              Selling a property is not just about placing a &quot;For
              Sale&quot; sign in the front yard and hoping for the best. In
              today&apos;s competitive real estate market, a well-crafted
              listing is a powerful tool that can make all the difference in
              attracting potential buyers and ultimately.
            </span>
          </div>
        </div>
        <div className="row row-cols-lg-5 row-cols-sm-3 row-cols-1 g-2 justify-content-center">
          {categories.map((cat, idx) => (
            <div className="col" key={idx}>
              <Link href={cat.link || '/properties'} className="box-link transation h-100">
                <div className="box-70px position-relative d-flex align-items-center justify-content-center">
                  <Image src={cat.icon} alt={cat.title} width={48} height={48} style={{ objectFit: 'contain' }} />
                </div>
                <h6 className="box-title text-uppercase">{cat.title}</h6>
                <p>{cat.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
