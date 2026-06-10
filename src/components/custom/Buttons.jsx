import React from 'react';

export const WhiteButtons = (props) => {
  return (
    <button style={{backgroundColor: 'white', color: 'black', border: '2px solid black', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold', borderRadius:"8px"}} onClick={props.onClick} >  
      {props.name}
    </button>
  );
}


export const BlackButtons = (props) => {
  return (
    <button style={{backgroundColor: 'black', color: 'white', border: '1px solid black', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold', borderRadius:"8px"}} onClick={props.onClick}>
      {props.name}
    </button>
  );
}


