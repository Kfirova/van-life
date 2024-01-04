import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";
import { Suspense } from "react";
import Error from "../../../components/Error";


export async function loader({params, request}) {
    const res = await requireAuth(request)
    if(res) {
        return res
    }
    
    console.log(res);
    return defer({vans: getHostVans(params.id)}) 
}

export default function Vans() {

const hostVansPromise = useLoaderData()

function renderHostVansElements(hostVans) {
    console.log(hostVans)
   const vansList = hostVans.map(element => {
    return (
        
            <Link 
                className="hostvans-list-item-box" 
                key={element.id} 
                to={element.id}
             >
            <img className="hostvans-list-item-image" src={element.imageUrl} alt={element.name}/>
            <div className="hostvans-list-item-name-price">
                <h3 className="hostvans-list-item-name">{element.name}</h3>
                <p className="hostvans-list-item-price"><b>${element.price}</b><small>/day</small></p>
            </div>
            </Link>
    )
   })

   return (
    <section className="hostvans-container">
    <h2 className="hostvans-title">Your listed Vans</h2>
        <div className="hostvans-list-box">
            {vansList}
        </div>
    </section>
   )
}


    return (
       
            // <section className="hostvans-container">
            // <h2 className="hostvans-title">Your listed Vans</h2>
                <Suspense fallback={<h3 className="hostvans loading">Loading Vans...</h3>}>
                    <Await resolve={hostVansPromise.vans} errorElement={<Error />}>
                    
                        {renderHostVansElements}
                    </Await>
                </Suspense>
                
            // </section>
          
    )
}