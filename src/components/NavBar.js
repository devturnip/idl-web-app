import React from "react";
import { NavLink } from "react-router-dom"
import { Facebook } from 'react-feather'

const links = [
    {
        id: 1,
        path: "/about",
        text: "About",
    },
    {
        id: 2,
        path: "/products",
        text: "Products",
    },
    {
        id: 3,
        path: "/business",
        text: "Business",
    },
    {
        id: 4,
        path: "/facilities",
        text: "Facilities",
    },
    {
        id: 5,
        path: "/activities",
        text: "Activities",
    },
    {
        id: 6,
        path: "/contact",
        text: "Contact",
    },
]

const Navbar = () => {
    return(
        <nav class="flex-column" className="navBar">
            <a className="navbar-brand" href="/">INDOLA PHARMA LINK</a>
            <ul>
                {links.map(link => {
                    return (
                        <li className="main-navlinks" key={link.id}>
                            <NavLink to={link.path} activeClassName="active-link" exact>
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
                <a className="social-media" href="https://www.facebook.com/IndolaPharmaLink" target="_blank" rel="noopener noreferrer">
                    <Facebook/>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar