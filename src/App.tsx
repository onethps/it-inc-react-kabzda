import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./Accourdion/Accordion";
import Select from "./Select/Select";
import {OnOff} from "./OnOff";

const App = React.memo(function App() {
    return (
        <div className="App">
            <Select/>
        </div>
    );
})

export default App;
