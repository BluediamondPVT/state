import React from 'react';

export default function QuickSearch() {
  return (
    <div className="full-row p-0 property-search-form on-slider">
      <div className="container">
        <div className="row">
          <div className="col">
            <form
              className="bg-light shadow-sm quick-search form-icon-right position-relative"
              action="/properties"
              method="GET"
            >
              <div className="d-lg-flex gap-1">
                <div className="field-search">
                  <select
                    className="form-select"
                    name="type"
                    aria-label="Default select example"
                    defaultValue=""
                  >
                    <option value="">Select Types</option>
                    <option value="House">House</option>
                    <option value="Office">Office</option>
                    <option value="1 BHK">1 BHK Flat</option>
                    <option value="2 BHK">2 BHK Flat</option>
                    <option value="3 BHK">3 BHK Flat</option>
                    <option value="1 RK">1 RK Room</option>
                    <option value="Commercial Gala">Commercial Gala</option>
                    <option value="Appartment">Appartment</option>
                    <option value="Condos">Condos</option>
                    <option value="Villa">Villa</option>
                    <option value="Small Family">Small Family</option>
                    <option value="Single Room">Single Room</option>
                  </select>
                </div>
                <div className="field-search">
                  <select
                    className="form-select"
                    name="deal"
                    aria-label="Default select example"
                    defaultValue=""
                  >
                    <option value="">Select Status</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                    <option value="Heavy Deposit">Heavy Deposit</option>
                    <option value="Low Downpayment">Low Downpayment</option>
                  </select>
                </div>
                <div className="field-search flex-grow-1">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="keyword"
                      placeholder="Enter Keywords... ( Ex: Luxury Appartment )"
                    />
                  </div>
                </div>
                <div className="field-search">
                  <div className="position-relative">
                    <button
                      type="button"
                      className="form-control price-toggle toggle-btn"
                      data-target="#data-range-price"
                    >
                      Price{' '}
                      <i className="fas fa-angle-down font-mini icon-font translate-middle text-dark"></i>
                    </button>
                  </div>
                </div>
                <div className="field-search">
                  <button
                    type="submit"
                    className="btn btn-primary hover-flash-move w-100"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
