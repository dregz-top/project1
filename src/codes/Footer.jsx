import React from 'react'
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import trone from '/photos/trone.png'

library.add(fab, faCheckSquare, faCoffee)

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="container">
        <div className="row">
          <a className="col-md-4 mb-4 d-flex align-items-center" href="/">
            <img src={trone} alt="Trone Logo" className="logo-img" />
            <h5 className="mb-0">Trone</h5>
          </a>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Links</h6>
            <ul className="list-unstyled font-of-footer">
              <li><a href="#">Home</a></li>
              <li><a href="/ContactUs">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="/Home">Products</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <a href="https://www.facebook.com/profile.php?id=100095286321658" aria-label="facebook" className="me-2">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
            </a>
            <a href="https://www.instagram.com/adham_elawamy/" aria-label="instagram" className="me-2">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
            <a href="#" aria-label="twitter">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </div>
        </div>

        <div className="text-center mt-3 border-top pt-3">
          © 2025 Trone ={">"} All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
