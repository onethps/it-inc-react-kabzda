import React, {useState} from 'react';
import './App.css';
import Select from "./Select/Select";
import HocUtills, {GlobalLocale} from "./hoc/hocUtills";
import axios from "axios";



const ConentTitle:React.FC<GlobalLocale> = ({state}) => {
    return <>
        <span>{state.home}</span>
        <span>{state.forum}</span>
    </>
}





const Header:React.FC<GlobalLocale> = ({state, }) => {
    const promise = axios.get('https://google.com')
promise.then( (data) => {
    console.log(data)
})

    console.log('sosi')

    return (
        <div>
            <button onClick={() =>  ('en')}>en</button>
            <button onClick={() =>  ('ru')}>Ru</button>
            <div>Header</div>
        </div>
    )
}

const SuperHeader = HocUtills(Header)




const App = React.memo(function App() {
    return (
        <div className="App">
            <SuperHeader/>
            <Select/>

        </div>
    );
})

export default App;
