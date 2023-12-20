import { useOutletContext } from "react-router-dom"


export default function Pricing() {
    const hostVan = useOutletContext()
    
   
    return(
         
    <>{hostVan && hostVan.price ?
        <div className="host-vans-price-container">
            <h3 className="host-vans-price">${hostVan.price}<small>/day</small></h3>
        </div>
        
        : 
        <div className="host-vans-price-container">
        <h6>Loading...</h6>
        </div>
        }
    </>
        
    )
}