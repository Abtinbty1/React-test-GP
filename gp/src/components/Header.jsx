import React from 'react';
/* 1. Import the new CSS file directly */
import '../Style/Header.css';

export default function Header() {
  return (
    /* 2. Use simple string classNames */
    <header className="header">
      <h1 className="title">Welcome to Our Site</h1>
    
    </header>
  );
}