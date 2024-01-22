import {Link, NavLink} from "react-router-dom"
import { useState } from "react"
import './navbarstyle.css'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="nav">
        <Link to="/" className="home">Home</Link>
        <div className="menu" onClick={ () => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
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
