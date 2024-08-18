import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className='main-container'>
                <div className='logo'>Patient Notes</div>
                <div className='nav-links'>
                    <ul className='nav-links'>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQS</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Our Customers</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div className='nav-links'>login</div>
            </div>
        </div>
    )
}

export default Navbar
