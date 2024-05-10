import React, {useState} from 'react';
import './App.css';
import {usePrevious} from "./hooks/CustomHooks";


function App () {
    const [current, setCurrent] = useState<number>(0)
    const currentRef = usePrevious(current);
    const change = () => {
        setCurrent(prevState => prevState += 100);
    }
    return (
        <div>
            <h2>useRef: {currentRef}</h2>
            <h2>useState: {current}</h2>
            <button onClick={change}>Click</button>
        </div>
    );
}

export default App;