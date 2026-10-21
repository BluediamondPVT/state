import React from 'react';

export default function HomeCounters() {
  return (
    <div className="full-row">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-1 g-4">
          <div className="col">
            <div className="d-flex flex-row text-uppercase counter-style-1">
              <h1 className="color-primary counter-num mb-0">$15.4M</h1>
              <span className="font-primary fw-bold counter-title">
                Amount
                <br />
                Transactions
              </span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-row text-uppercase counter-style-1">
              <h1 className="color-primary counter-num mb-0">25K+</h1>
              <span className="font-primary fw-bold counter-title">
                Properties
                <br />
                Sold Out
              </span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-row text-uppercase counter-style-1">
              <h1 className="color-primary counter-num mb-0">1500</h1>
              <span className="font-primary fw-bold counter-title">
                Provided
                <br />
                Positive Feedback
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
