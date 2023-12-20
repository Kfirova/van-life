
import { useOutletContext } from "react-router-dom"



export default function Details() {
   const hostVan = useOutletContext()
  
  

 let type =''
   if(hostVan) {           
 
     type= hostVan.type[0].toUpperCase() + hostVan.type.slice(1)
   }
    
    return(
        <>
             {
            hostVan ?
            <section className="hostVanDetails-details-container">
            <p className="hostVanDetails-details-name"><b>Name:</b> {hostVan.name}</p>
            <p className="hostVanDetails-details-category"><b>Category:</b> {type}</p>
            <p><b>Description:</b> {hostVan.description}</p>
            <p className="hostVanDetails-details-visibility"><b>Visiblity:</b> Public</p>
            </section> 
        :
        <section className="hostVanDetails-details-container">
        <h6>Loading...</h6>
        </section>
       }
   
        </>
      
        
       
    )
}