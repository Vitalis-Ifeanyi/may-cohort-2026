import React from 'react';

function Article() {
  
  const click = ()=>{
    alert("Article Clicked")
  }
  return (
    <div className='article'>
      <div onClick={click}></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Article;
