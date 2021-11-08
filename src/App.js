import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import logo from "./shared/assistant.png";

function App() {
  return (
    
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Virtual Assistance!</h1>
        <nav 
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}>
            <Link to="/about">About</Link> |{" "}
            <Link to="/services">Services</Link> |{" "}
            <Link to="/contact">Contact</Link>
            
          </nav>
          <Outlet />
      </div>
    
    
  );
}

export default App;
