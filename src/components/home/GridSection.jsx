import React from 'react';
import { BlackButtons, WhiteButtons } from '../custom/Buttons';

function GridSection() {
  return (
    <div className='gridSection'>
      <div>
        <WhiteButtons name="Login" onClick={() => alert("Welcome")}/>
      </div>
      <div>
        <BlackButtons/>
        <WhiteButtons name="Cancel" onClick={() => alert("Login Cancel")}/>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default GridSection;
