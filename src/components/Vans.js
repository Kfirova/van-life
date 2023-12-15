
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Type from "./Type"


export default function Vans() {

const [vans, setVans] = useState([])

useEffect(() => {
  fetch('/api/vans')
    .then(res => res.json())
      .then(data => setVans(data.vans))
}, [])
    
    let vanElements
if(vans) {
    vanElements = vans.map(e => 
        
        <Link key={e.id} className="van-container" to={`/vans/${e.id}`}>
        
            <img className="van-image" src={e.imageUrl} alt={e.name}/>
       
            
            <div className="van-name-price">
                <h3 className='van-name'>{e.name}</h3>
                <p className="van-price">${e.price}<small>/day</small></p>
            </div>

            <Type type={e.type}/>
           
        </Link>
        
    )
}


    return(
        <main >
            <h2 className="vans-title">Explore our van options</h2>
            <div className="vans-type-link-container">
                <Link className="vans-type-link">
                    Simple
                </Link>

                <Link className="vans-type-link">
                    Luxury
                </Link>

                <Link className="vans-type-link">
                    Rugged
                </Link>
                <Link className="vans-type-link">
                    Clear Filters
                </Link>
            </div>
           
          
            <article className="vans-container">
            {vanElements}
            </article>
          
        </main>
    )
}