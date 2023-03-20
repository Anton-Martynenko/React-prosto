import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";

function App() {
    console.log("App rendering");
    return (
        <div>
            <AppTitle />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering");
    return <>Hello, world!</>
}

function Rating() {
    console.log("Rating rendering");
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

function Star() {
    console.log("Star rendering");
    return (
        <div>
            <div>Star</div>
        </div>
    );
}

export default App;
