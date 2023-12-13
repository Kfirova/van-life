import { Link } from "react-router-dom"


export default function NavBar() {
    return(
        <header>
            <nav >
             <Link className="header-title" to='/'>#VANLIFE</Link>
                <div>
                    <Link className="header-link" to='/about'>About</Link>
                    <Link className="header-link" to='/vans'>Vans</Link>
                </div>
            </nav>
        </header>
        
    )
}