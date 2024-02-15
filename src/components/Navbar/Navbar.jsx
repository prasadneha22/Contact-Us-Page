import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src="/images/logo.png" alt="" />
        </div>
        <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar