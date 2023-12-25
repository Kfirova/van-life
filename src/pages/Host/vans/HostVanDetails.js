import { useEffect, useState } from "react"
import {Link, Outlet, useParams } from "react-router-dom"
import Type from "../../../components/Type"
import HostVanDetailsNavBar from "../../../components/HostVanDetailsNavBar"


export default function HostVanDetails() {

    const {id} = useParams()
    const[hostVan, setHostVan] = useState(null)
    
    useEffect(() => {
        fetch(`/api/host/vans/${id}`) 
            .then(res => res.json())
                .then(data => setHostVan(data.vans))
    },[id])



    return(
        <div className="hostVanDetails-main">
           
            <Link 
                className="back-button"
                to='..'
                relative="path"
                >
                &larr; <span>Back to all vans</span>

            </Link>
          
            {hostVan ?
            <div className="hostVanDetails-flex-container">
                <div className="hostVanDetails-container">
                <div className="hostVanDetails-summary-box">
                    <img  className="hostVanDetails-summary-image" src={hostVan.imageUrl} alt="hostVan.name"/>
                    <div >
                        <Type type={hostVan.type}/>
                        <h3 className="hostVanDetails-summary-name">{hostVan.name}</h3>
                        <p><b>${hostVan.price}</b><small>/day</small></p>
                    </div>
                </div>
            </div> 


            </div>
            :
            
            <h3 className="hostVanDetails-loading">Loading...</h3>
           
             }
             
            <HostVanDetailsNavBar/>
            <Outlet context={hostVan}/>
        </div>
       
    )
}