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
          
            <ButtonGroup variant="contained">
              <Link to="/about" style={{textDecoration: "none"}}><Button md={3} startIcon={<InfoRoundedIcon />} variant="contained" sx={{color: "gray", backgroundColor: "lightgreen"}}>About</Button></Link>
              <Link to="/services" style={{textDecoration: "none"}}>
                <Button md={3}
                startIcon={<MiscellaneousServicesRoundedIcon />}
                variant="contained" sx={{color: "gray", backgroundColor: "lightgreen", margin: "0 5px 0 5px"}}>Services</Button></Link>
              <Link to="/contact" style={{textDecoration: "none"}}>
                <Button md={3} 
                  startIcon={<ConnectWithoutContactRoundedIcon />}
                  variant="contained" sx={{color: "gray", backgroundColor: "lightgreen"}}>Contact</Button></Link>
            </ButtonGroup>
          
          
          </nav>
        </header>
        
          <Outlet />
          <Footer />
      </div>
      
   
    
  );
}

export default App;
