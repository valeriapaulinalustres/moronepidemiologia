import React, { useState }  from 'react';
import {FaUserMd} from 'react-icons/fa';
import {FaMoon} from 'react-icons/fa';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';
import './header.css'

function Header() {

  const [menu, setMenu] = useState(false)

  return (
    <div className='header-container'>
       <div className='logo'></div>
        
        <div className='menubar-container'>
        <button className='menubar-buttons'><FaMoon className='menubar-icons'/></button>
            <button className='menubar-buttons'><FaUserMd className='menubar-icons'/></button>
            
            <HeaderMenu menu={menu} setMenu={setMenu}/>
            <Navbar menu={menu} setMenu={setMenu}/>
           
        </div>
    </div>
  )
}

export default Header

