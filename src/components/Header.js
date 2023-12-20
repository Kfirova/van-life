import { NavLink } from "react-router-dom"


export default function Header() {
    return(
        <header>
            <nav className="header-nav">
             <NavLink className= {({isActive}) => isActive ? 'header-title selected' : 'header-title'} to='/'>#VanLife</NavLink>
                <div>
                    <NavLink className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} to='/host'>Host</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} to='/about'>About</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} to='/vans'>Vans</NavLink>
                </div>
            </nav>
        </header>
        
    )
}
