import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import trone from '/photos/trone.png'
function Nav() {
  const [SEARCH, SETSEARCH] = useState("");
  const [DATA, SETDATA] = useState([]);
  const [FILTERED, SETFILTERED] = useState([]);

 
  useEffect(() => {
    fetch("http://localhost:3000/db")
      .then((res) => res.json())
      .then((data) => {
        SETDATA(data);
        SETFILTERED(data);
      })
      .catch((err) => console.error("Error loading db.json:", err));
  }, []);
  useEffect(() => {
  if (SEARCH.trim() === "") {
    SETFILTERED([]);
  } else {
      SETFILTERED(
      DATA.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(SEARCH.toLowerCase())
        )
      )
    );
  }
}, [SEARCH, DATA]);


  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand d-flex align-items-center me-3" href="/">
            <img
              src={trone}
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2"
              alt="Trone Logo"
            />
            Trone
          </a>

          <form
            className="d-flex flex-grow-1 me-3"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={SEARCH}
              onChange={(e) => SETSEARCH(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> 
            <li className="nav-item dropdown me-3 list-unstyled">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                id="deliverDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Deliver To Egypt
              </button>
              <ul className="dropdown-menu position-absolute" aria-labelledby="deliverDropdown">
                <li><a className="dropdown-item" href="#">Cairo</a></li>
                <li><a className="dropdown-item" href="#">Giza</a></li>
                <li><a className="dropdown-item" href="#">Qalyubia</a></li>
                <li><a className="dropdown-item" href="#">Suez</a></li>
                <li><a className="dropdown-item" href="#">Alexandria</a></li>
                <li><a className="dropdown-item" href="#">Aswan</a></li>
                <li><a className="dropdown-item" href="#">Luxor</a></li>
                <li><a className="dropdown-item" href="#">Ismailia</a></li>
                <li><a className="dropdown-item" href="#">Tanta</a></li>
              </ul>
            </li>
          <button className="btn btn-primary">Login</button>
        </div>
      </nav>
<div className="container mt-3">
  {SEARCH.trim() !== "" && FILTERED.length > 0 ? (
    <div className="d-flex flex-wrap gap-3">
      {FILTERED.map((item, index) => (
        <div className="card p-2"style={{ width: "150px", textAlign: "center" }}>
        <a href={item.buy}>
          <img src={item.img} style={{ width: "80px", height: "80px", objectFit: "contain"}}/>
        </a>
          <h6 className="mt-2" style={{ fontSize: "12px" }}>{item.name}</h6>

          <p style={{ fontSize: "11px", margin: 0 }}>{item.price} EGP</p>

        </div>
      ))}
    </div>
  ) : SEARCH.trim() !== "" ? (
    <p></p>
  ) : null}
</div>

    </>
  );
}

export default Nav;
