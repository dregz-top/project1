import React, { useState } from 'react'
import Nav from '../codes/Nav'
import Footer from '../codes/Footer'
import { useNavigate } from 'react-router-dom'

function Contactus() {
  const [FULLNAME, SETFULLNAME] = useState("")
  const [EMAIL, SETEMAIL] = useState("")
  const [SUBJECT, SETSUBJECT] = useState("")
  const [MESSAGE, SETMESSAGE] = useState("")

  const [ERRORS, SETERRORS] = useState({})
  const NAVIGATE = useNavigate()

  const HANDLE_SUBMIT = () => {
    let NEW_ERRORS = {}

    if (!FULLNAME.trim()) NEW_ERRORS.fullname = true
    if (!EMAIL.trim()) NEW_ERRORS.email = true
    if (!SUBJECT.trim()) NEW_ERRORS.subject = true
    if (!MESSAGE.trim()) NEW_ERRORS.message = true

    SETERRORS(NEW_ERRORS)
    if (Object.keys(NEW_ERRORS).length === 0) {
      NAVIGATE('/Done')
    }
  }

  return (
    <>
      <Nav />
      <div className='d-flex flex-column align-items-center bg-color' style={{ marginTop: "100px", backgroundColor: "#c9cfd7" }}>
        <input
          type="text"
          placeholder='Full Name'
          className={`form-control w-50 ${ERRORS.fullname ? "border border-danger" : ""}`}
          value={FULLNAME}
          onChange={(e) => SETFULLNAME(e.target.value)}
        />
        <input
          type="email"
          placeholder='Email'
          className={`form-control w-50 mt-3 ${ERRORS.email ? "border border-danger" : ""}`}
          value={EMAIL}
          onChange={(e) => SETEMAIL(e.target.value)} 
        />
        <input
          type="text"
          placeholder='Subject'
          className={`form-control w-50 mt-3 ${ERRORS.subject ? "border border-danger" : ""}`}
          value={SUBJECT}
          onChange={(e) => SETSUBJECT(e.target.value)}
        />
        <textarea
          placeholder='Your Message'
          className={`form-control w-50 mt-3 ${ERRORS.message ? "border border-danger" : ""}`}
          value={MESSAGE}
          onChange={(e) => SETMESSAGE(e.target.value)}
        ></textarea>
        
        <button
          onClick={HANDLE_SUBMIT}
          className='btn btn-primary w-50 mt-3'
          style={{ marginBottom: "201px" }}
        >
          Submita
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Contactus