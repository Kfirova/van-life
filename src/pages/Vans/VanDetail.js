import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import Type from "../../components/Type"


export default function VanDetail(props) {

const [van, setVan] = useState(null)
const {id} = useParams()
const location = useLocation()

console.log(location);

// console.log(props);
useEffect(() => {
    fetch(`/api/vans/${id}`)
        .then(res => res.json())
            .then(data  => setVan(data.vans))
}, [id])

const search = location.state?.search  || '' 
const type = location.state?.type || 'all'
const result =   (
    <main className="vanDetail-container">
        <div className="vanDetail-box" >
                           
            <Link 
                className="back-button" 
                to ={`..${search}`}
                relative="path"
                >
                &larr; <span>Back to {type} vans</span>
                </Link>

                    {van ?(
                               
                        <>
                            <img className="vanDetail-image" src= {van.imageUrl} alt={van.name}/>
                                <Type type={van.type}/>
                                <h3 className="vanDetail-title">{van.name}</h3>
                                <h4>{`$${van.price}`}<small>/day</small></h4>
                                <p className="vanDetail-description">{van.description}</p>
                                <Link className="vanDetail-btn">Rent this van</Link>
                                </>
                                )
                                :
                                <h2 className="vanDetail-loading">Loading...</h2>}
                        
                        </div>
                        
                    </main>) 
                
    return result

}