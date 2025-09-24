// ...existing code...
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../codes/Nav'
import Footer from '../codes/Footer'
import './Landing.css'
import trone from '/photos/trone.png'

function Landing() {
  const navigate = useNavigate()

  return (
    <>
      <Nav />

      <header
        className="vh-100 d-flex align-items-center"
        style={{ backgroundColor: '#c9cfd7' }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Welcome to Trone</h1>
                <img src={trone} className='arrow-down' style={{height:"100px"}}/>
              <div className="d-flex justify-content-center gap-3 ">
                <button
                  className="btn btn-primary btn-lg hover-effect"
                  onClick={() => navigate('/Home')}
                  aria-label="Discover Now"
                >
                  Discover Now
                </button>

                <a
                  className="btn btn-outline-secondary btn-lg hover-effect"
                  href="#features"
                >
                  Learn More
                </a>
              </div>

              <p className="text-muted small mt-4">
                شحن داخل مصر · إرجاع سهل · دعم 24/7
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="py-5" style={{ backgroundColor: 'red' }}>
        <div className="container d-flex justify-content-center">
          <div className="row g-4">
            <div className="col-md-4 text-center border-land">
              <h5 className="mb-2">Wide Selection</h5>
              <p className="text-muted small">آلاف المنتجات من علامات تجارية موثوقة.</p>
            </div>
            <div className="col-md-4 text-center border-land">
              <h5 className="mb-2">Fast Delivery</h5>
              <p className="text-muted small">توصيل سريع داخل جميع محافظات مصر.</p>
            </div>
            <div className="col-md-4 text-center border-land">
              <h5 className="mb-2">Secure Payments</h5>
              <p className="text-muted small">دفع آمن بتقنيات حديثة.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Landing
// ...existing code...
