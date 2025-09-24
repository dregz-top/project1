import { Routes, Route } from 'react-router-dom'
import About from './src//pages/About'
import Home from './src/pages/Home'
import Error from './src/pages/Error'
import Products from './src/pages/Products'
import Contactus from './src/pages/Contactus'
import Done from './src/pages/Done'
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Products/:name" element={<Products/>} />1
      <Route path='*' element={<Error/>}/>
      <Route path="/ContactUs" element={<Contactus/>}/>
      <Route path="/Done" element={<Done/>}/>
    </Routes>
  )
}
