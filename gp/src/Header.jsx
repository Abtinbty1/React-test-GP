import React from 'react';
/* 1. Import the new CSS file directly */
import './Header.css';

export default function Header() {
  return (
    /* 2. Use simple string classNames */
    <header className="header">
      <ul className="navlist">
        <li><a className="navlink" href="/Home">Home</a></li>
        <li><a className="navlink" href="/Register">Register</a></li>
        <li><a className="navlink" href="/Login">Login</a></li>
        <li><a className="navlink" href="/Help">Help</a></li>
      </ul>
    </header>
  );
}