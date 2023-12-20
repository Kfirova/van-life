import { NavLink } from "react-router-dom"

export default function HostVanDetailsNavigationBar() {
    return (
        <nav className="HostVanDetailsLayout-link-container">
        <NavLink
            className={({isActive}) => isActive ? 'HostVanDetailsLayout-link selected' : 'HostVanDetailsLayout-link'}
            to='.'
            end
        >
            Details
        </NavLink>
        <NavLink
            className={({isActive}) => isActive ? 'HostVanDetailsLayout-link selected' : 'HostVanDetailsLayout-link'}
            to='pricing'
        >
            Pricing
        </NavLink>

        <NavLink
            className={({isActive}) => isActive ? 'HostVanDetailsLayout-link selected' : 'HostVanDetailsLayout-link'}
            to='photos'
        >
           Photos
        </NavLink>
    </nav>
    )
}