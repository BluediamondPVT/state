'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AGENCY_CONFIG } from '@/data/properties';

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin') || pathname === '/login') {
    return null;
  }
  const isHomePage = pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [counts, setCounts] = useState<{
    total: number;
    byType: Record<string, number>;
    byDeal: Record<string, number>;
  }>({
    total: 6,
    byType: { '1 BHK': 2, '2 BHK': 1, '3 BHK': 1, '1 RK': 1, 'Commercial Gala': 1 },
    byDeal: { 'Heavy Deposit': 1, 'Low Downpayment': 1, 'For Sale': 3, 'For Rent': 1 },
  });

  useEffect(() => {
    fetch('/api/properties/counts')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCounts({
            total: data.total || 6,
            byType: data.byType || {},
            byDeal: data.byDeal || {},
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (isHomePage ? 100 : 80));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Header styles based on route & scroll
  const headerStyle: React.CSSProperties = isHomePage
    ? {
        position: isScrolled ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1050,
        backgroundColor: isScrolled
          ? 'rgba(30, 30, 42, 0.98)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 25px rgba(0,0,0,0.25)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }
    : {
        position: isScrolled ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1050,
        backgroundColor: '#ffffff',
        boxShadow: isScrolled
          ? '0 4px 20px rgba(0,0,0,0.08)'
          : '0 1px 3px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease',
      };

  return (
    <>
      <header
        className={`main-header header-style-1 ${
          isHomePage
            ? isScrolled
              ? 'fixed-top shadow-lg'
              : 'header-absolute'
            : isScrolled
            ? 'fixed-top'
            : ''
        }`}
        style={headerStyle}
      >
        {/* Top Header Bar */}
        {!isScrolled && (
          <div
            className="top-header"
            style={
              isHomePage
                ? undefined
                : {
                    borderBottom: '1px solid #f0f0f0',
                    padding: '6px 0',
                    fontSize: '13px',
                  }
            }
          >
            <div className="container">
              <div className="row row-cols-md-2 row-cols-1 align-items-center">
                <div className="col">
                  <ul
                    className={`list-element ${
                      isHomePage ? 'list-color-white' : 'list-color-secondary'
                    } d-flex justify-content-start gap-3 mb-0 p-0`}
                    style={{ listStyle: 'none' }}
                  >
                    <li>
                      <a
                        href={`tel:${AGENCY_CONFIG.phone}`}
                        className={
                          isHomePage
                            ? 'text-white text-decoration-none'
                            : 'text-secondary text-decoration-none'
                        }
                      >
                        <i
                          className="fa fa-phone"
                          style={{ color: '#aa8453' }}
                        ></i>{' '}
                        Need Support? {AGENCY_CONFIG.phoneDisplay}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul
                    className={`navbar-top list-element ${
                      isHomePage ? 'list-color-white' : 'list-color-secondary'
                    } d-flex justify-content-end gap-3 mb-0 p-0`}
                    style={{ listStyle: 'none' }}
                  >
                    <li>
                      <Link
                        href="/about"
                        className={
                          isHomePage
                            ? 'text-white text-decoration-none'
                            : 'text-secondary text-decoration-none'
                        }
                      >
                        Seller Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sell-property"
                        className={
                          isHomePage
                            ? 'text-white text-decoration-none'
                            : 'text-secondary text-decoration-none'
                        }
                      >
                        <i
                          className="fa-solid fa-house-chimney-medical"
                          style={{ color: '#aa8453' }}
                        ></i>{' '}
                        List Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/login"
                        className={
                          isHomePage
                            ? 'text-white text-decoration-none'
                            : 'text-secondary text-decoration-none'
                        }
                      >
                        <i
                          className="fa-solid fa-lock"
                          style={{ color: '#aa8453' }}
                        ></i>{' '}
                        Agent Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <div className="main-nav">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav
                  className={`navbar navbar-expand-lg ${
                    isHomePage ? 'nav-white' : 'nav-dark'
                  } nav-active-primary nav-hover-primary nav-line-active`}
                >
                  <Link className="navbar-brand" href="/">
                    <Image
                      className="nav-logo"
                      src={
                        isHomePage
                          ? '/assets/images/logo/logo-full-white.png'
                          : '/assets/images/logo/logo.png'
                      }
                      alt="Bhiwandi Estate"
                      width={180}
                      height={45}
                      priority
                      style={{ height: 'auto', maxWidth: '180px' }}
                    />
                  </Link>

                  <Link
                    href="/login"
                    className="mobile-login"
                    title="Login or Registration"
                  >
                    <i className="fa-regular fa-user"></i>
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon flaticon-menu flat-small text-primary"></span>
                  </button>

                  <div
                    className={`collapse navbar-collapse ${
                      mobileMenuOpen ? 'show' : ''
                    }`}
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                      {/* 1. HOME */}
                      <li className="nav-item text-nowrap">
                        <Link
                          className="nav-link"
                          href="/"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Home
                        </Link>
                      </li>

                      {/* 2. ABOUT US */}
                      <li className="nav-item text-nowrap">
                        <Link
                          className="nav-link"
                          href="/about"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </Link>
                      </li>

                      {/* 3. PROPERTIES (DROPDOWNABLE) */}
                      <li
                        className={`nav-item dropdown text-nowrap ${
                          propertyDropdownOpen ? 'show' : ''
                        }`}
                        onMouseEnter={() => setPropertyDropdownOpen(true)}
                        onMouseLeave={() => setPropertyDropdownOpen(false)}
                      >
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a
                          className="nav-link dropdown-toggle"
                          href="/properties"
                          onClick={(e) => {
                            e.preventDefault();
                            setPropertyDropdownOpen(!propertyDropdownOpen);
                          }}
                        >
                          Properties
                        </a>

                        <ul
                          className={`dropdown-menu shadow-lg border-0 py-2 ${
                            propertyDropdownOpen ? 'show d-block' : ''
                          }`}
                          style={{ minWidth: '260px', borderRadius: '8px' }}
                        >
                          <li>
                            <Link
                              href="/properties"
                              className="dropdown-item py-2 fw-semibold d-flex align-items-center justify-content-between"
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i className="fa-solid fa-border-all me-2 text-muted"></i>{' '}
                                All Properties
                              </span>
                              <span className="badge rounded-pill bg-light text-dark border ms-2">
                                {counts.total}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <Link
                              href="/properties?type=1+BHK"
                              className="dropdown-item py-2 d-flex align-items-center justify-content-between"
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i
                                  className="fa-solid fa-bed me-2"
                                  style={{ color: '#aa8453' }}
                                ></i>{' '}
                                1 BHK Flats
                              </span>
                              <span className="badge rounded-pill bg-light text-muted border ms-2">
                                {counts.byType['1 BHK'] || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/properties?type=2+BHK"
                              className="dropdown-item py-2 d-flex align-items-center justify-content-between"
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i
                                  className="fa-solid fa-couch me-2"
                                  style={{ color: '#aa8453' }}
                                ></i>{' '}
                                2 BHK Flats
                              </span>
                              <span className="badge rounded-pill bg-light text-muted border ms-2">
                                {counts.byType['2 BHK'] || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/properties?type=3+BHK"
                              className="dropdown-item py-2 d-flex align-items-center justify-content-between"
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i
                                  className="fa-solid fa-hotel me-2"
                                  style={{ color: '#aa8453' }}
                                ></i>{' '}
                                3 BHK Luxury Flats
                              </span>
                              <span className="badge rounded-pill bg-light text-muted border ms-2">
                                {counts.byType['3 BHK'] || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/properties?type=1+RK"
                              className="dropdown-item py-2 d-flex align-items-center justify-content-between"
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i className="fa-solid fa-door-open me-2 text-secondary"></i>{' '}
                                1 RK Budget Rooms
                              </span>
                              <span className="badge rounded-pill bg-light text-muted border ms-2">
                                {counts.byType['1 RK'] || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <Link
                              href="/properties?deal=Heavy+Deposit"
                              className="dropdown-item py-2 fw-semibold d-flex align-items-center justify-content-between"
                              style={{ color: '#d97706' }}
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i className="fa-solid fa-money-bill-wave me-2"></i>{' '}
                                Heavy Deposit (Zero Rent)
                              </span>
                              <span className="badge rounded-pill bg-warning-subtle text-warning-emphasis border border-warning-subtle ms-2">
                                {counts.byDeal['Heavy Deposit'] || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/properties?deal=Low+Downpayment"
                              className="dropdown-item py-2 fw-semibold d-flex align-items-center justify-content-between"
                              style={{ color: '#059669' }}
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i className="fa-solid fa-tags me-2"></i> Low Downpayment
                              </span>
                              <span className="badge rounded-pill bg-success-subtle text-success-emphasis border border-success-subtle ms-2">
                                {counts.byDeal['Low Downpayment'] || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/properties?type=Commercial+Gala"
                              className="dropdown-item py-2 fw-semibold d-flex align-items-center justify-content-between"
                              style={{ color: '#2563eb' }}
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <span>
                                <i className="fa-solid fa-warehouse me-2"></i>{' '}
                                Commercial Galas &amp; Godowns
                              </span>
                              <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis border border-primary-subtle ms-2">
                                {counts.byType['Commercial Gala'] || 0}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* 4. WHY CHOOSE US */}
                      <li className="nav-item text-nowrap">
                        <Link
                          className="nav-link"
                          href="/why-choose-us"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Why Choose Us
                        </Link>
                      </li>

                      {/* 5. FAQ */}
                      <li className="nav-item text-nowrap">
                        <Link
                          className="nav-link"
                          href="/faq"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          FAQ
                        </Link>
                      </li>

                      {/* 6. BLOG */}
                      <li className="nav-item text-nowrap">
                        <Link
                          className="nav-link"
                          href="/blog"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Blog
                        </Link>
                      </li>

                      {/* 7. CONTACT US */}
                      <li className="nav-item text-nowrap">
                        <Link
                          className="nav-link"
                          href="/contact"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>

                    <Link
                      href="/admin/add-property"
                      className="btn btn-primary btn-hover-secondary hover-flash-move ms-lg-3 text-nowrap"
                      style={{
                        whiteSpace: 'nowrap',
                        height: '42px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      + Add Property
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for inner pages when header becomes fixed so content does not jump */}
      {!isHomePage && isScrolled && <div style={{ height: '70px' }} />}
    </>
  );
}
