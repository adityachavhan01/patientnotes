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
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="#">FAQS</Link></li>
                        <li><Link to="#">Privacy</Link></li>
                        <li><Link to="#">Security</Link></li>
                        <li><Link to="#">Our Customers</Link></li>
                        <li><Link to="#">Help Center</Link></li>
                    </ul>
                </div>
                <div className='nav-links'>login</div>
            </div>
        </div>
    )
}

export default Navbar
