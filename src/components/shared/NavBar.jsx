import React from 'react';
import logo from "/favicon.svg"
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/"><div>
        <h3 style={{fontFamily:"arial"}}>sunnyside</h3>
        <img src={logo} alt='' className='logo'/>
      </div></NavLink>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
     
    </nav>
  );
}

export default NavBar;
