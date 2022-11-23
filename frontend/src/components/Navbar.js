// import { Link } from "react-router-dom"
// import React from 'react'
// export default function Navbar() {
//     return (
//         <nav className="nav">
            // <Link to="/" className="site-title">
            //     Kentrells Bookstore
            // </Link>
            // <ul>
            //     <Link to="/Books">Books</Link>
            //     {/* <Link to="/Checkout">Checkout</Link> */}
            //     {/* <Link to="/Contact">Contact</Link> */}
            //     <Link to="/Profile">Profile</Link>
            //     <Link to="/Login">Login</Link>
            //     <Link to="/Signup">Signup</Link>
            //     <Link to="/Cart">Cart</Link>

//             </ul>
//         </nav>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);

        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (

        
        <>
            

            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            Kentrells Bookstore <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>

                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/books'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Books
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/profile'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/login'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/signup'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/cart'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Cart
                            </Link>
                        </li>

                    </ul>
                    {/* && is a shortcut and returns whatever is after it*/}
                    {button && <Button buttonStyle='btn--outline'> Cart </Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
