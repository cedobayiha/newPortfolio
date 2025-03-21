import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/">Cedric Bayiha</Link>
            <nav>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/projects">
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Header