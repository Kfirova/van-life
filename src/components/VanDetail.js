import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Type from "./Type"


export default function VanDetail(props) {

const [van, setVan] = useState(null)


const {id} = useParams()
// console.log(props);
useEffect(() => {
    fetch(`/api/vans/${id}`)
        .then(res => res.json())
            .then(data  => setVan(data))
}, [id])


const result =   (
                    <main className="vanDetail-container">
                        <div className="vanDetail-box" >
                            <Link className="vanDetail-link" to='/vans'>
                                    Back to all vans
                            </Link>
                        {van &&(
                                    <>
                                        <img className="vanDetail-image" src= {van.vans.imageUrl} alt={van.vans.name}/>
                                        <Type type={van.vans.type}/>
                                        <h3 className="vanDetail-title">{van.vans.name}</h3>
                                        <h4>{`$${van.vans.price}`}/<small>day</small></h4>
                                        <p className="vanDetail-description">{van.vans.description}</p>
                                        <Link className="vanDetail-btn">Rent this van</Link>
                                    </>
                        
                        )}
                        
                        </div>
                        
                    </main>) 
                
    return result

  

}