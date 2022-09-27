import React from 'react';
import "./Header.css"

const Header = () => { 
  return (
    <div className='header'>
      <div>
        <h2 className='brand'>Khanaaa</h2>
      </div>
      <div className='links-container'>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;