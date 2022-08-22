import React from 'react';
import '../inv.css';
import downArrow from '../icons/down-arrow.png';

const Inv = () => {
  return (
    <div>
      <div id='landing' className='inv-landing'>
        <div className='intro-title'>The Wedding Of</div>
        <div className='names'>Messi & Antonella</div>
        <div>Minggu, 31 Desember 2022</div>
        <div className='to-title'>
          <div>Kepada Yth.</div>
          <div>Bapak/Ibu/Saudara/i</div>
          <div className='attendant-name'>Neymar Jr.</div>
        </div>
        <a href="#second">
          <img src={downArrow} className='down-arrow' alt="" />
        </a>  
      </div>
      <div id='second' className='inv-second'>page 2</div>
    </div>
  );
}

export default Inv;