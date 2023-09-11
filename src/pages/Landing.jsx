import React from 'react';
import "../landing.css";
import linkedin from '../icons/icons8-linkedin-64.png';

const Landing = () => {
  return (
    <div className='landing-wrapper d-flex flex-column justify-content-center'>
      <div className="container">
        <div className='welcome'>Hi There!</div>
        <div>My name is Rahmad Ramdhani. I am a Front-End Developer based in Sumbawa, Indonesia.</div>
        <div className="linkedin-icon-wrapper">
          <a href="https://www.linkedin.com/in/rahmad-ramdhani-a08102131/">
            <img src={linkedin} alt='linkedin' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;