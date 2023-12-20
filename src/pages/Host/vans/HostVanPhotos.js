import { useOutletContext } from "react-router-dom"



export default function Photos() {
  
    const hostVan = useOutletContext();
   

    return(
        <>
        {
            hostVan && hostVan.imageUrl ?
           (<div className="host-vans-photos-container">
                <img className="host-vans-photos-container-image" src={hostVan.imageUrl} alt="van"/>
            </div>
           )
            :(
            <div className="host-vans-photos-container">
                <h6>Loading...</h6>
            </div>
            )
        }
           
        </>
       
    )
}