import {useref} from 'react'
import { useState } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'


function App() {
  return (
    
      <div>
        
          <Nav />
          
        <Header/>
        
        <Form />
        <Footer />
        </div>
        );
}

export default App
