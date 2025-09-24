// ...existing code...
import React from 'react';
import Footer from '../codes/Footer';
import Nav from '../codes/Nav';

function AboutUs() {
  return (
    <>
    <Nav/>
    <section className="container py-5">
      <div
        className="bg-white rounded-4 shadow-sm p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4"
        style={{ overflow: 'hidden' }}
      >
        <div style={{ flex: 1 }}>
          <div className="d-flex align-items-center mb-3">
            <img
              src="/photos/trone.png"
              alt="Trone"
              width="56"
              height="56"
              className="me-3"
              style={{ objectFit: 'contain' }}
            />
            <div>
              <h1 className="h4 mb-0">Welcome to Trone</h1>
              <p className="text-muted mb-0" style={{ fontSize: 13 }}>
                Local + Global shopping, faster delivery, better value.
              </p>
            </div>
          </div>

          <div className="mb-3" style={{ lineHeight: 1.6 }}>
            <p>
              Dear Customer,
            </p>
            <p>
              Since our beginning in Egypt, Trone has focused on improving your shopping
              experience — wider selection, reliable delivery, and great prices.
              Your previous account details, addresses and preferences are preserved,
              so you can continue shopping without interruption.
            </p>
            <p>
              Trone brings local and international brands together across electronics,
              apparel, home & kitchen, groceries and more — all supported with Arabic
              and English experiences on web and mobile.
            </p>
          </div>

          <ul className="list-unstyled mb-3">
            <li className="mb-2">
              <span className="badge bg-primary me-2">Fast</span>
              Reliable delivery across Egypt
            </li>
            <li className="mb-2">
              <span className="badge bg-success me-2">Wide</span>
              Millions of products from local & international sellers
            </li>
            <li>
              <span className="badge bg-warning text-dark me-2">Easy</span>
              Simple payments and localized support
            </li>
          </ul>

          <div className="d-flex gap-2">
            <a href="/Home" className="btn btn-primary">
              Start Shopping
            </a>
            <a href="/ContactUs" className="btn btn-outline-secondary">
              Contact Support
            </a>
          </div>
        </div>

        <div style={{ width: 220, flexShrink: 0 }}>
          <div className="bg-light rounded-3 p-3 text-center" style={{ height: '100%' }}>
            <img
              src="/photos/trone.png"
              alt="Trone logo"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
        </>
  );
}

export default AboutUs;
// ...existing code...
