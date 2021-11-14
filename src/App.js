import React from 'react';
import { Outlet, Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import logo from "./shared/assistant.png";
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import 'fontsource-roboto';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Main />
      
    </React.Fragment>
    
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Main />} />
      //     <Route path="aboutus" element={<About />} />
      //     <Route path ="services" element={<Services />} />
      //     <Route path ="contact" element={<Contact />} />
      //   </Routes>
      // </BrowserRouter>

  );
}

export default App;
