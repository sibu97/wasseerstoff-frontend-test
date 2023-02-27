import React from 'react'
import menuIcon from './icons/menu.png'
import profile from './icons/profile.png'

import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>

        {/* logo of orion  */}
        <div className="logo">
            <div className="logo-wrap">
                    <img src="./logo.png" alt='logo' />
                    
            </div>
                
            <h2>WASSERSTOFF</h2>
        </div>

        {/* search bar for searching items */}
        <div className="search-bar">
            <input type="search" />
            <div className="search-icon"></div>
            <div className="search-icon-line"></div>
        </div>

            {/* navigation menu options on nav bar */}
        <ul>
                    <li>
                <Link to="/">Statistics</Link>
                </li>
                <li>
                <Link to="/Overview">Overview</Link>
                </li>
                <li>
                <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                <Link to="/Analytics">Analytics</Link>
                </li>
      </ul>

        {/* <a href="/">Statistics</a>
        <a href="/">Overview</a>
        <a href="/"></a>
        <a href="/"></a> */}

        <div className="right-icons">
            <div className="man-icon">
                <img src={profile} alt='' />
            </div>
            <div className="menu-bar-box">
               <img src={menuIcon}  alt='' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar