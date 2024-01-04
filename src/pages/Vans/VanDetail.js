import { Await, Link, defer, useLoaderData, useLocation } from "react-router-dom"
import Type from "../../components/Type"
import { getVans } from "../../api"
import { Suspense } from "react"
import Error from "../../components/Error"


export function loader({params}) {
    console.log(params)
    return defer({van: getVans(params.id)}) 
}

export default function VanDetail(props) {

const location = useLocation()

const vanPromise = useLoaderData()

const search = location.state?.search  || '' ;
const type = location.state?.type || 'all';

function renderVanElement(van) {
    const result =   (
        <div className="vanDetail-container">
            <div className="vanDetail-box" >
                               
                <Link 
                    className="back-button" 
                    to ={`..${search}`}
                    relative="path"
                    >
                    &larr; <span>Back to {type} vans</span>
                </Link>
           
                    <div>
                        <img className="vanDetail-image" src= {van.imageUrl} alt={van.name}/>
                        <Type type={van.type}/>
                        <h3 className="vanDetail-title">{van.name}</h3>
                        <h4>{`$${van.price}`}<small>/day</small></h4>
                        <p className="vanDetail-description">{van.description}</p>
                        <Link className="vanDetail-btn">Rent this van </Link>
                                       
                    </div>
                                
            </div>
                            
        </div>) 

        return result
}

                
    return (
        <Suspense fallback={<h3 className="vanDetail loading">Loading Van Details...</h3>}>
            <Await resolve={vanPromise.van} errorElement={<Error />}>
                {renderVanElement}
            </Await>
        </Suspense>
    ) 

}