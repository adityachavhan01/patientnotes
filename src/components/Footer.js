import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-content1'>
                    <h1>patient notes</h1>
                    Saving time for health practitioners: speedy patient note <br />finalisation, supported by A.I.<br />
                    hello@patientnotes.app
                </div>
                <div className='footer-content2'>
                    <div className='footer-content2a'>
                    <h2>Proffesion</h2>

                        <ul>
                            <li>doctor</li>
                            <li>nurse</li>
                            <li>dentist</li>
                        </ul>
                    </div>
                    <div className='footer-content2b'>
                        <h2>student</h2>
                        <ul>
                            <li>doctor</li>
                            <li>nurse</li>
                            <li>dentist</li>
                        </ul>
                    </div>
                    <div className='footer-content2c'>
                        <h2>company</h2>
                        <ul>
                            <li>doctor</li>
                            <li>nurse</li>
                            <li>dentist</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
