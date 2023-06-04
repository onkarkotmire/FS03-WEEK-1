import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <div>
            <div className='navbox'>
                <div>
                    <h1>Flex Buisness Pro</h1>
                    <h3 style={{color: "gray"}}>Clean and Modern Buisness Theme</h3>
                </div>
                <div className='navoption'>
                    <a href="#" className='navlink' style={{color: "blue"}}>Home</a>
                    <a href="#" className='navlink'>About Us</a>
                    <a href="#" className='navlink'>Styleguide</a>
                    <a href="#" className='navlink'>Blog</a>
                    <a href="#" className='navlink'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}
