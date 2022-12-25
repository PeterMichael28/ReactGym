import React from 'react'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/bars.png'
import { useState } from 'react';
import { Link } from 'react-scroll';


const Header = () => {

  const [ open, setOpen ] = useState( false )
  
const mobile = window.innerWidth <= 768 ? true : false

  return (
      <div className='header'>
          <img src={ Logo } alt="logo" className='logo' />
      { (!open && mobile) ?
        <div className='bars'>
        <img  src={Hamburger} alt="" style={{width: '1.5rem', cursor: 'pointer', height: '1.2rem'}} onClick={() => setOpen(true)} />
        </div>
        : <ul className='header-list'>
            <li><Link onClick={() => setOpen(false)} span='true' smooth={true} to='hero' >Home</Link></li>
            <li><Link onClick={() => setOpen(false)} span='true' smooth={true} to='programs'>Programs</Link></li>
            <li><Link onClick={() => setOpen(false)} span='true' smooth={true} to='reasons'>Why Us</Link></li>
            <li><Link onClick={() => setOpen(false)} span='true' smooth={true} to='plans'>Plans</Link></li>
            <li><Link onClick={() => setOpen(false)} span='true' smooth={true} to='testimonials'>Testimonials</Link></li>
          </ul>
          }
          
    </div>
  )
}

export default Header