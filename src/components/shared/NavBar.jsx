import React from 'react';
import logo from "/favicon.svg"
import { NavLink } from 'react-router-dom';
import { NavData } from '../../data/NAvData';

function NavBar() {
  return (
    <nav>
      <NavLink to="/"><div>
        <h3 style={{fontFamily:"arial"}}>sunnyside</h3>
        <img src={logo} alt='' className='logo'/>
      </div></NavLink>
      <ul>
        {NavData.map((props,index)=>(
          <li key={index}><NavLink to={props.link}>{props.name}</NavLink></li>
        ))}
      </ul>
     
    </nav>
  );
}

export default NavBar;
