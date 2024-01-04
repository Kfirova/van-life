import { NavLink, Outlet } from "react-router-dom"



export default function HostLayout() {

    const activeStyle = {
        fontWeight: '800',
        textDecoration: 'underline',
        color: '#161616'
    }

   
    return (
       <div className="host-container">
            <nav className="host-link-container">
             
                <NavLink 
                    className='host-link' 
                    style={({isActive}) => isActive ? activeStyle : null } 
                    to='.'
                    end
                    >
                        Dashbord
                    </NavLink>

                <NavLink 
                    className='host-link' 
                    style={({isActive}) => isActive ? activeStyle : null } 
                    to='income'
                    >
                        Income
                </NavLink>

                <NavLink 
                    className='host-link' 
                    style={({isActive}) => isActive ? activeStyle : null } 
                    to='vans'
                    >
                        Vans
                </NavLink>

                <NavLink 
                    className='host-link' 
                    style={({isActive}) => isActive ? activeStyle : null } 
                    to='reviews'
                    >
                        Reviews
                </NavLink>
            </nav>
           
            <Outlet />
       </div>

     
    )
}