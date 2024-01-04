import { Await, Link, defer, useLoaderData, useSearchParams } from "react-router-dom"
import Type from "../../components/Type"
import { getVans } from "../../api"
import { Suspense } from "react"
import Error from "../../components/Error"


export function loader() {
   return defer({vans: getVans()}) 

}

export default function Vans() {
const [searchParams, setSearchParams] = useSearchParams()
const vansPromise = useLoaderData()


const typeFilter = searchParams.get('type')

function handleFilterChange(key, value) {
    setSearchParams(prevParam => {
        if(value === null){
            prevParam.delete(key)
        } else {
            prevParam.set(key, value)
        }
        console.log('handlefilter function')
        return prevParam
    })
}

function renderVanElements(vans) {
    
    console.log(vans)
    const vanFilter = typeFilter ?
    vans.filter(van => van.type.toLowerCase() === typeFilter)
    :
    vans
    
    const vanElements = vanFilter.map(e => 
        
        <Link 
            key={e.id} 
            className="van-container" 
            to={e.id} 
            state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter
                }}
                >
                <img className="van-image" src={e.imageUrl} alt={e.name}/>
           
                <div className="van-name-price">
                    <h3 className='van-name'>{e.name}</h3>
                    <p className="van-price"><b>${e.price}</b><small>/day</small></p>
                </div>
    
                <Type type={e.type}/>
               
        </Link>
            
        )
            return (
                <>
                    <div className="vans-type-link-container">
                        <button
                            className={`vans-type-link simple ${(typeFilter === 'simple') && 'selected'}`}
                            onClick={() =>handleFilterChange('type', 'simple')}
                        >
                        Simple
                        </button>

                        <button 
                            className={`vans-type-link luxury ${(typeFilter === 'luxury') && 'selected'}`}
                            onClick={() =>handleFilterChange('type', 'luxury') }
                        >
                            Luxury
                        </button>

                        <button 
                            className= {`vans-type-link rugged ${(typeFilter === 'rugged') && 'selected'}`}
                            onClick={() =>handleFilterChange('type', 'rugged')}
                        >
                            Rugged
                        </button>

                        {typeFilter &&
                        <button
                            className="vans-type-link clear" 
                            onClick={() =>handleFilterChange('type', null) }
                        >
                            Clear Filters
                        </button>
                }
            
                 </div>
                     <article className="vans-container">
                        {vanElements}
                    </article>
                </>
                )       
         
}
   
    return(
        <div>
        <div className="vans main-container">
        <h2 className="vans-title">Explore our van options</h2>
        <Suspense fallback={<h3 className="vans loading">Loading Vans...</h3>}>
            <Await resolve={vansPromise.vans} errorElement={<Error/>}>
                {renderVanElements}
            </Await> 
            
        </Suspense>
       
        </div>
        </div>
    )   
}

