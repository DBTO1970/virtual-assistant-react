import React from "react";
import logo from "../assistant.png";
function Home(props) {
    return (
        <div className='container'>
            
            <div className="App">
                    <header className="App-header">
                    <h4>Home</h4>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                        Your assistant for those things you just don't have time for.
                        </p>
                    </header>
                </div>
        </div>
    );
}

export default Home;