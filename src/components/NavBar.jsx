import React from 'react';
import logo from "/favicon.svg"

function NavBar() {
  return (
    <nav>
      <div>
        <h3 style={{fontFamily:"arial"}}>sunnyside</h3>
        <img src={logo} alt='' className='logo'/>
      </div>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
     
    </nav>
  );
}

export default NavBar;
