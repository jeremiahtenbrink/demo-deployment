import React from "react";
import logo from "./logo.svg";
import { Route } from "react-router";
import "./App.css";
import Other from "./Other";

function App(){
    return ( <div className="App">
        <header className="App-header">
            <h1>Index</h1>
            <Route path={ "/other" } component={ Other }/>
        </header>
    </div> );
}

export default App;
