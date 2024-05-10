import React, {useState} from 'react';
import './App.css';
import {useStorage} from "./hooks/CustomHooks";

function App() {
    const { save, isSave } = useStorage();
    const [getSave, setGetSave] = useState(() => {
        // @ts-ignore
        return JSON.parse(localStorage.getItem('table')) || save;
    });

    const handleSaveClick = () => {
        isSave(); // додав щоб прибрати TS6133: 'isSave' is declared but its value is never read.
        const updatedSave = getSave + 1;
        setGetSave(updatedSave);
        localStorage.setItem("table", JSON.stringify(updatedSave));
    };

    return (
        <div>
            <h2>{getSave}</h2>
            <button onClick={()=> {handleSaveClick()}}>click</button>
        </div>
    );
}

export default App;