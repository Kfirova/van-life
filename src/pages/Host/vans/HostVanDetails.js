import {Await, Link, Outlet, defer, useLoaderData} from "react-router-dom"
import Type from "../../../components/Type"
import HostVanDetailsNavBar from "../../../components/HostVanDetailsNavBar"
import { getHostVans } from "../../../api"
import { requireAuth } from "../../../utils"
import { Suspense } from "react"
import Error from "../../../components/Error"



export async function loader({params, request}) {
    const res = await requireAuth(request)
    if(res){
        return res
    }
    return defer({van: getHostVans(params.id)}) 
}

export default function HostVanDetails() {
  
    const hostVanPromise = useLoaderData()

    function renderHostVanElement(hostVan) {
        return(
                <>
                    <Link 
                className="back-button"
                to='..'
                relative="path"
                >
                &larr; <span>Back to all vans</span>

            </Link>
          
        
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
            <HostVanDetailsNavBar/>
            <Outlet context={hostVan}/>
                </>
        )
        
    }
  
    return(
        <div className="hostVanDetails-main">
           
            <Suspense fallback={<h3 className="hostVanDetails loading">Loading Van Details...</h3>}>
                <Await resolve={hostVanPromise.van} errorElement={<Error />}>
                    {renderHostVanElement}
                </Await>
            </Suspense>
        
            
        </div>
       
    )
}