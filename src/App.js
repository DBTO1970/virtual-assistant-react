import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import logo from "./shared/assistant.png";
import { Button } from "@material-ui/core";




function App() {
  return (
    
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Virtual Assistance!</h1>
        <nav 
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}>
          
            <Link to="/about" style={{textDecoration: "none"}}><Button className="fixed" style={{color: "black", backgroundColor: "lightgreen"}}>About Us</Button></Link> |{" "}
            <Link to="/services" style={{textDecoration: "none"}}><Button style={{color: "black", backgroundColor: "lightgreen"}}>Services</Button></Link> |{" "}
            <Link to="/contact" style={{textDecoration: "none"}}><Button style={{color: "black", backgroundColor: "lightgreen"}}>Contact</Button></Link>
            
          </nav>
        </header>
        
          <Outlet />
      </div>
    
    
  );
}

export default App;
