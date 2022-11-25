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

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { UserContext } from './pages/UserContext';

function Navbar() {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log("loggedInUser")

        console.log(loggedInUser)
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser[0].user_name)
        }
    }, []);
   

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
                            Kentrells Bookstore
                            <i class='fab fa-typo3' />
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

                       
                        {/* if user doesnt exist, render login in navbar */}
                        {!user && <li>
                            <Link
                                to='/login'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>}

                        <li>
                            <Link
                                to='/cart'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Cart
                            </Link>
                        </li>
                        {button && <Button buttonStyle='btn--outline'> Cart </Button>}

                        
                        {user && <li className='nav-item'>
                            <Link
                                to='/profile'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                {user}
                            </Link>
                        </li> }

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
