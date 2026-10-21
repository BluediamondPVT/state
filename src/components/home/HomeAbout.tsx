import React from 'react';

export default function HomeAbout() {
  return (
    <>
      <div className="full-row" id="about">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <h2 className="color-dark mb-4">
                Our mission is to redefine real estate for the customer&apos;s
              </h2>
              <p>
                Finderland is one of the world&apos;s leading property agents.
                Our experience spans the globe.
              </p>
              <p>
                where we believe in more than just selling properties – we
                envision a future where every individual&apos;s dreams of owning
                a home, securing an investment, or finding the perfect
                commercial space come true. Our mission is not just a statement,
                but a driving force that guides every decision and action we
                take. Since our inception, we have been committed to empowering
                people and building a brighter future through real estate
                excellence.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="p-5 bg-light rounded-4">
                <ul className="list-style d-flex flex-column my-2">
                  <li>Only pay when you publish</li>
                  <li>Full featured event app</li>
                  <li>Unlimited featured use</li>
                  <li>24/7 supports</li>
                  <li>Event analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-row p-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
