import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


function Baby() {
const [cards, setCards] = useState([]);
 const navigate = useNavigate()
function fetchCards() {
    axios.get("http://localhost:3000/Baby").then((res) => {
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
  )
}

export default Baby
