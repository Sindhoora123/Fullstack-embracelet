import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo';
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";


const Navbar = () => {
  return (
<div className='navbar'>
  <Logo />

  <div className='navbar-icons'>
    <CgProfile style={{fontSize:"25px",color:"#d73f5c"}}/>
    
  </div>
</div>

  )
}

export default Navbar