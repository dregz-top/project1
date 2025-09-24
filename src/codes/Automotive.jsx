import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
function Automotive() {
const [cards, setCards] = useState([]);
 const navigate = useNavigate()
function fetchCards() {
    axios.get("http://localhost:3000/Automotive ").then((res) => {
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
  )
}

export default Automotive