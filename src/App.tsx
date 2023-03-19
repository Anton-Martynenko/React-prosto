import React from 'react';

import './App.css';

function App() {
    return (
        <div>
            Hello, world!
            <Rating/>
            <Accordeon/>
        </div>
    );
}

function Rating() {
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

function Accordeon() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

function Star() {
    return (
        <div>
            <div>Star</div>
        </div>
    );
}

export default App;
