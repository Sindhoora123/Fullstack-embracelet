import React, { useState, useContext } from 'react';
import './Navbar.css';
import Logo from '../Assets/logo';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);

  const totalItems = Object.values(cartItems).reduce((acc, val) => acc + val, 0);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Logo />
        <IoMdArrowDropdown style={{fontSize:"30px"}}
          className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        />
      </div>

      <ul className={`nav-menu ${isDropdownOpen ? 'nav-menu-visible' : ''}`}>
        <li onClick={() => { setMenu("shop"); setDropdownOpen(false); }}>
          <Link to='/' style={{ color: '#eb3b5d', textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => { setMenu("men"); setDropdownOpen(false); }}>
          <Link to='/men' style={{ color: '#eb3b5d', textDecoration: 'none' }}>Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => { setMenu("women"); setDropdownOpen(false); }}>
          <Link to='/women' style={{ color: '#eb3b5d', textDecoration: 'none' }}>Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => { setMenu("kids"); setDropdownOpen(false); }}>
          <Link to='/kids' style={{ color: '#eb3b5d', textDecoration: 'none' }}>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className='login-cart'>
        {localStorage.getItem('auth-token')
        ?<p onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</p>
      :<p className='login'><a href='/login'>Login</a></p>}
        <Link to="/cart">
          <div style={{ position: 'relative' }}>
            <CiShoppingCart size={24} />
            {totalItems > 0 && (
              <span className='nav-cart-count'>{totalItems}</span>
            )}
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
