import React from 'react'
import './Footer.css'
import { FaPinterest, FaWhatsapp,FaInstagram } from 'react-icons/fa'
import Logo from '../Assets/logo'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'><Logo/></div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'><FaWhatsapp/></div>
            <div className='footer-icons-container'><FaPinterest/></div>
            <div className='footer-icons-container'><FaInstagram/></div>
        
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer