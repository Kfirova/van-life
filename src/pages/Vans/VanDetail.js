import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Type from "../../components/Type"


export default function VanDetail(props) {

const [van, setVan] = useState(null)


const {id} = useParams()
// console.log(props);
useEffect(() => {
    fetch(`/api/vans/${id}`)
        .then(res => res.json())
            .then(data  => setVan(data.vans))
}, [id])


const result =   (
                    <main className="vanDetail-container">
                        <div className="vanDetail-box" >
                            <Link className="vanDetail-link" to='/vans'>
                                    Back to all vans
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