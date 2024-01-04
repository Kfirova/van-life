import { Link } from "react-router-dom"



export default function Home() {
    return (
        
         <div className="home-container">
            <h1 className="home-title">You got the travel plans, we got the travel vans.</h1>
            <p className="home-text">Add adventure to your life by joining the #vanlife movement.
            Rent the perfect van to make your perfect road trip.</p>
            <Link className="home-btn" to='/vans'>Find your van</Link>
        </div>
    )

}