import React from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assistant.png";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {
   
    Routes,
    Route
  } from "react-router-dom";

function Main() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <Routes>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' render={() => {<About />}} />
                    <Route exact path='/services' render={() => {<Services />}} />
                    <Route exact path='/contact' render={() => {<Contact />}} />
                </Routes>
                <div className="App">
                    <header className="App-header">
                        <h1>This is a Virtual Assistant</h1>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                        Your assistant for those things you just don't have time for.
                        </p>
                    </header>
                </div>
            </div>
        );
        
        
    };

export default Main;

