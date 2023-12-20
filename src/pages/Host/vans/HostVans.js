import { useState, useEffect } from "react"
import { Link } from "react-router-dom";




export default function Vans() {

   const [hostVans,setHostVans] = useState([]);
    
   useEffect(() => {
    fetch('/api/host/vans')
        .then(res => res.json())
            .then(data => setHostVans(data.vans))
        
   }, [])

   console.log(hostVans)

   const vansList = hostVans.map(element => {
    return (
        <Link 
            className="hostvans-list-item-box" 
            key={element.id} 
            to={`/host/vans/${element.id}`}
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
        <>
            {hostVans.length > 0 ? (

            <section className="hostvans-container">
             
                <div className="hostvans-list-box">
                    {vansList}
                </div>
                
            </section>
            )
            :
            <section className="hostvans-container">
            <h3 className="hostvans-loading">Loading...</h3>
            </section>
            }
        </>
            
    )
}