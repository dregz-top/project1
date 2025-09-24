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

function Home() {

const [cards, setCards] = useState([]);
 const navigate = useNavigate()
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
  <div>
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/photos/back-to-school.png" className="d-block back-to-school-cursoul" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/photos/cib.avif" className="d-block cib-cursoul" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/photos/book.avif" className="d-block book-cursoul" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <p  className='fw-bold fs-2 text-center'>RECOMMENDED FOR YOU</p>
  <div className="container">
    <div className="row">
      {cards.map((value, index) => (
        <div className="col-md-3 mb-4 d-flex justify-content-center">
          <div className="card border-of-card" style={{ width: "18rem" }}>
            <img src={value.img} className="card-img-top jkl p-4" alt="..." />
            <div className="card-body">
              <p className="card-text title-card">{value.title}</p>
              <span className="egb-size">EGP</span><span className="card-text price-card fw-bold">{value.price}</span>
              <br></br>
              <button onClick={() => navigate(`/Products/${encodeURIComponent(value.name)}`)} className="btn btn-primary mt-3" aria-label="Add to cart">
                <FontAwesomeIcon icon={faCartPlus} size="lg" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <p  className='fw-bold fs-2 text-center'>Beauty Picks</p>
  <Beauty/>
  <p  className='fw-bold fs-2 text-center'>Sports picks</p>
  <Sport/>
  <p  className='fw-bold fs-2 text-center'>Automotive picks</p>
      <Automotive/>
      <p className="fw-bold fs-2 text-center">Baby Picks</p>
      <Baby/>
      <Footer/>
</div>
  );
}
export default Home
