import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import logo from "./shared/assistant.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import 'fontsource-roboto';


function App() {
  return (
    
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h2>Virtual Assistance!</h2>
        <nav 
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}>
          <ButtonGroup variant="contained" style={{padding: "5px", margin: "5px"}}>
            <Link to="/about" style={{textDecoration: "none"}}><Button xs='3' startIcon={<InfoRoundedIcon />} variant="contained" className="fixed" style={{color: "black", backgroundColor: "lightgreen"}}>About Us</Button></Link> |{" "}
            <Link to="/services" style={{textDecoration: "none"}}>
              <Button xs='3'
              startIcon={<MiscellaneousServicesRoundedIcon />}
              variant="contained" style={{color: "black", backgroundColor: "lightgreen"}}>Services</Button></Link> |{" "}
            <Link to="/contact" style={{textDecoration: "none"}}>
              <Button xs='3' 
                startIcon={<ConnectWithoutContactRoundedIcon />}
                variant="contained" style={{color: "black", backgroundColor: "lightgreen"}}>Contact</Button></Link>
          </ButtonGroup>
          </nav>
        </header>
        
          <Outlet />
          <Footer />
      </div>
    
    
  );
}

export default App;
