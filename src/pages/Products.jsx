import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'bootstrap'
import Nav from '../codes/Nav'
import Footer from '../codes/Footer'

function Products() {
  const { name } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/db')
      .then(res => {
        const found = res.data.find(p => p.name === decodeURIComponent(name))
        if (found) setProduct(found)
        else setError('Product not found')
      })
      .catch(err => setError('Failed to load product'))
     .finally(() => setLoading(false))
  }, [name])

  if (loading) return <div className="container mt-5">Loading...</div>
  if (error) return <div className="container mt-5">{error} <br/><Link to="/">Go home</Link></div>
  return (
    <>
    <Nav/>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.img} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.title}</p>
          <p><span style={{ fontWeight: 'bold' }}>Price :</span> EGP {product.price}</p>
          <Link to="/">
            <button className="btn btn-success">Buy now</button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Products