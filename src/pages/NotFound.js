import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <div>
        <section className="not-found container">
            <h1>Sorry, the page you were looking for was not found.</h1>
                <Link 
                    to='/'
                    className="not-found link"
                >
                    Return to home
                </Link>
            </section>
         
        </div>
        
    )
}