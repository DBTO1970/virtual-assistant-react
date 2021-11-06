import React from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assistant.png";
import About from './About';
import Contact from './Contact';
import Services from './Services';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Main() {
    
        return(
            <React.Fragment>
                <Router>
                    <div>
                        <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                            <Link to="/services">Services</Link>
                            </li>
                            <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Routes>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/services">
                                <Services />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/">
                                <Main />
                            </Route>
                        </Routes>
                    </div>
            </Router>
            <div className="App">
                <header className="App-header">
                    <h1>This is a Virtual Assistant</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Your assistant for those things you just don't have time for.
                    </p>
                </header>
            </div>
        </React.Fragment>
        );
        
        
    };

    

