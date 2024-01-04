import { NavLink} from "react-router-dom"

export default function Header() {

function logOut(){
    localStorage.removeItem('loggedin')
    
}

    return(
        <header>
            <nav className="header-nav">
             <NavLink className= {({isActive}) => isActive ? 'header-title selected' : 'header-title'} to='/'>#VanLife</NavLink>
                <div className="header-right-box">
                    <NavLink 
                        className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} 
                        to='/host'
                        >
                            Host
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} 
                        to='/about'
                        >
                            About
                    </NavLink>
                    <NavLink  
                        className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} 
                        to='/vans'
                        >
                            Vans
                    </NavLink>
                    <NavLink  
                        className={({isActive}) => isActive ? 'header-link selected' : 'header-link'} 
                        to='/login'
                        >
                            <img 
                                className='header-link-login-avatar' 
                                src="/images/avatar-icon.png" 
                                alt="avatar-icon"/>
                    </NavLink>
                    
                    <button className="header logout-btn" onClick={logOut}>Log Out</button>
                                      
                </div>
            </nav>
        </header>
        
    )
}
