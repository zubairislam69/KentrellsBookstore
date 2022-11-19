import { Link } from "react-router-dom"
import React from 'react'
export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Kentrells Bookstore
            </Link>
            <ul>
                <Link to="/Books">Books</Link>
                {/* <Link to="/Checkout">Checkout</Link> */}
                {/* <Link to="/Contact">Contact</Link> */}
                <Link to="/Profile">Profile</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Signup</Link>
                <Link to="/Cart">Cart</Link>

            </ul>
        </nav>
    )
}
