import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Vans from "./components/Vans";




export default function App() {

const [vans, setVans] = React.useState([])

React.useEffect(() => {
  fetch('/api/vans')
    .then(res => res.json())
      .then(res => setVans(res))
}, [])

  return (
    <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans vans={vans}/>}/>
  
        </Routes>
      
    <Footer />
    </BrowserRouter>
   
  );
}


