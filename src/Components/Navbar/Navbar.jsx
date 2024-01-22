import {Link, NavLink} from "react-router-dom"
import './navbarstyle.css'

export const Navbar = () => {
  return (
    <nav className="nav">
        <Link to="/" className="home">Home</Link>
        <ul className="ul">
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}
