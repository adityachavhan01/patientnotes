import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className='main-container'>
            <div className='logo'><Link to="/">Patient Notes
            </Link></div>
                <div className='nav-links'>
                    <ul className='nav-links'>
                        <li><Link to="/pricing">Generate Session</Link></li>
                        <li><Link to="/dictate">Dictate</Link></li>
                    </ul>
                </div>
                <div className='nav-links'>login</div>
            </div>
        </div>
    )
}

export default Navbar
