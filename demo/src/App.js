import React from "react";
import logo from "./logo.svg";
import { Route } from "react-router";
import "./App.css";
import Other from "./Other";

function App(){
    return ( <div className="App">
            <header className="App-header">
                <Route path={ "/other" } component={ Other }/>
            </header>
        </div> );
}

export default App;
