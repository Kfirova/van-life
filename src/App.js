import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Vans from "./components/Vans";




export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
  
        </Routes>
      
    <Footer />
    </BrowserRouter>
   
  );
}


