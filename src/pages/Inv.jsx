import React from 'react';
import '../inv.css';

const Inv = () => {
  return (
    <div>
      <div id='landing' className='inv-landing'>
        landing page
        <a href="#second">Go To Middle</a>  
      </div>
      <div id='second' className='inv-second'>page 2</div>
    </div>
  );
}

export default Inv;