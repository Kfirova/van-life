import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Layout from "./components/Layout"
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetail from './pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashbord from './pages/Host/Dashbord';
import HostVans from './pages/Host/vans/HostVans';
import HostVanPricing from './pages/Host/vans/HostVanPricing';
import HostVanPhotos from './pages/Host/vans/HostVanPhotos';
import HostVanInfo from './pages/Host/vans/HostVanInfo';
import HostVanDetails from './pages/Host/vans/HostVanDetails';
import NotFound from './pages/NotFound';
import Error from './components/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='vans' element={<Vans /> } errorElement={<Error />} loader={vansLoader}/>
    <Route path='vans/:id' element={<VanDetail />}/>

    <Route path='host' element={<HostLayout />} >
      <Route index element={<Dashbord/>} />
      <Route path='income' element= {<Income />}/>
      <Route path='vans' element= {<HostVans />} />
      <Route path='vans/:id' element= {<HostVanDetails/>}>
        <Route index element={<HostVanInfo />}/>
        <Route path = 'pricing' element={<HostVanPricing />}/>
        <Route path = 'photos' element={<HostVanPhotos />}/>
        
      </Route>
      <Route path='reviews' element= {<Reviews />}/>
    </Route>
    <Route path='*' element={<NotFound />}/>
  </Route>
))

export default function App() {

  return (
   <RouterProvider router={router}/>

  );
}


