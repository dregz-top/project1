import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../codes/Nav'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import Beauty from "../codes/Beauty";
import Sport from "../codes/Sport";
import Automotive from "../codes/Automotive";
import Footer from "../codes/Footer";
import Baby from "../codes/Baby";
import cib from '/photos/cib.avif';
import book from '/photos/book.avif';
import backToSchool from '/photos/back-to-school.png';

function Home() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  function fetchCards() {
    axios.get("http://localhost:3000/Mobile").then((res) => {
      setCards(res.data);
    })
    .catch((error) => {
      console.error("Error fetching cards:", error);
    });
  }
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="home">
      <Nav/>

      <div className="container">
        <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="ratio ratio-16x9">
                <img src={backToSchool} className="d-block img-fluid w-100" alt="back to school"/>
              </div>
            </div>
            <div className="carousel-item">
              <div className="ratio ratio-16x9">
                <img src={cib} className="d-block img-fluid w-100" alt="cib"/>
              </div>
            </div>
            <div className="carousel-item">
              <div className="ratio ratio-16x9">
                <img src={book} className="d-block img-fluid w-100" alt="book"/>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" aria-label="Previous slide">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" aria-label="Next slide">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h2 className="fw-bold fs-4 text-center mb-4">RECOMMENDED FOR YOU</h2>

        <div className="row gy-4">
          {cards.map((value, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="ratio ratio-4x3">
                  <img src={value.img} className="card-img-top img-fluid p-3" alt={value.title} style={{ objectFit: 'contain' }}/>
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text title-card mb-2" style={{flexGrow:0}}>{value.title}</p>
                  <div className="mt-auto">
                    <div className="mb-2">
                      <span className="egb-size">EGP</span>
                      <span className="card-text price-card fw-bold ms-1">{value.price}</span>
                    </div>
                    <button onClick={() => navigate(`/Products/${encodeURIComponent(value.name)}`)} className="btn btn-primary w-100" aria-label="Add to cart">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h3 className='fw-bold fs-5 text-center mb-4'>Beauty Picks</h3>
        <Beauty/>
        <h3 className='fw-bold fs-5 text-center mt-4 mb-4'>Sports picks</h3>
        <Sport/>
        <h3 className='fw-bold fs-5 text-center mt-4 mb-4'>Automotive picks</h3>
        <Automotive/>
        <h3 className="fw-bold fs-5 text-center mt-4 mb-4">Baby Picks</h3>
        <Baby/>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
