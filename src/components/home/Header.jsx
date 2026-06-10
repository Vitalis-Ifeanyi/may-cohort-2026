import React from 'react';
import NavBar from '../shared/NavBar';

function Header(props) {
  return (
    <div className='header'>
      <NavBar/>

      <h1 style={{color: 'black', textAlign: 'center', marginTop: '50px', fontSize: '2rem'}}>{props.title}</h1>
      
      <img src={props.image} alt="Header Image" style={{width: '100px', height: '400px', }} />

      
    </div>
  );
}

export default Header;
