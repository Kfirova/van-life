import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Layout from "./components/Layout"
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader } from './pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Income, { loader as incomeLoader } from './pages/Host/Income';
import Reviews, { loader as reviewsLoader } from './pages/Host/Reviews';
import Dashbord, { loader as dashbordLoader } from './pages/Host/Dashbord';
import HostVans, { loader as hostVansLoader} from './pages/Host/vans/HostVans';
import HostVanPricing from './pages/Host/vans/HostVanPricing';
import HostVanPhotos from './pages/Host/vans/HostVanPhotos';
import HostVanInfo from './pages/Host/vans/HostVanInfo';
import HostVanDetails, { loader as hostVanDetailsLoader } from './pages/Host/vans/HostVanDetails';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import './server'
import Login, { loader as loginLoader, action as loginAction,  } from './pages/Login';
import { requireAuth } from './utils';


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='login' element={<Login />} action={loginAction} loader={loginLoader} />
    <Route path='vans' element={<Vans /> } errorElement={<Error />} loader={vansLoader}/>
    <Route path='vans/:id' element={<VanDetail />} errorElement={<Error />} loader={vanDetailLoader}/>
    <Route path='host' element={<HostLayout />}  >
      <Route 
        index 
        element={<Dashbord/>} 
        loader={dashbordLoader}
        errorElement={<Error />}
        />
      <Route 
        path='income' 
        element= {<Income />} 
        loader={incomeLoader}
        errorElement={<Error />}
        />
      <Route 
        path='reviews' 
        element= {<Reviews />} 
        loader={reviewsLoader}
        errorElement={<Error />}
        />
      <Route 
        path='vans' 
        element= {<HostVans />} 
        loader={hostVansLoader}
        errorElement={<Error />}/>
      <Route 
        path='vans/:id' 
        element= {<HostVanDetails/>} 
        loader={hostVanDetailsLoader}
        errorElement={<Error />}
        >
        <Route 
          index 
          element={<HostVanInfo />}
          loader={async({request}) => await requireAuth(request)}/>
        <Route 
          path = 'pricing' 
          element={<HostVanPricing />} 
          loader={async({request}) => await requireAuth(request)}/>
        <Route 
          path = 'photos' 
          element={<HostVanPhotos />} 
          loader={async({request}) => await requireAuth(request)}/>
      </Route>
     
    </Route>
    <Route path='*' element={<NotFound />}/>
  </Route>
))

export default function App() {

  return (
   <RouterProvider router={router}/>

  );
}


