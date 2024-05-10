import React from 'react';
import './App.css';
import {useToggle} from "./hooks/CustomHook";

function App(){
    const {toggle,isToggled} = useToggle()
    return (
        <div>
            <button onClick={isToggled}>Click</button>
            <h2>{toggle.toString()}</h2>
        </div>
    );
}

export default App;