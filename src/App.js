import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
      <div className="App">
        <h1>Virtual Assistance!</h1>
        <nav 
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}>
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link> | {" "}
            <Link to="/services">Services</Link>
          </nav>
          <Outlet />
      </div>
    
    
  );
}

export default App;
