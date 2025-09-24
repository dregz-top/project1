import React from 'react'
import Nav from '../codes/Nav'
import Footer from '../codes/Footer'

function Done() {
   const imgStyle = {
      width: '100%',
      maxWidth: '900px',
      height: 'auto',
      maxHeight: '80vh',
      objectFit: 'contain',
      display: 'block'
   }

   return (
      <>
         <Nav/>
         <main className='d-flex justify-content-center align-items-center'>
            <img src="/photos/done.png" alt="Done" style={imgStyle}/>
         </main>
         <Footer/>
      </>
   )
}

export default Done