import { Link } from "react-router-dom"



export default function Vans(props) {
    let list
if(props.vans.vans) {
     list = props.vans.vans.map(e => 
        <div className="van-container">
        <Link>
            <img className="van-image" src={e.imageUrl} alt={e.name}/>
        </Link>
            
            <p className="van-name-price">
                <span className='van-name'>{e.name}</span>
                <span className="van-price">${e.price}</span>
            </p>
            <p className={`van-type ${e.type}`}>
                {e.type}
            </p>
        </div>
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
            {list}
            </article>
          
        </main>
    )
}