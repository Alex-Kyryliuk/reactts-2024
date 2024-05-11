import './App.css';
import {useStorage} from "./hooks/CustomHooks";

function App() {
    const {getSave, handleSaveClick } = useStorage()

    return (
        <div>
            <h2>{getSave}</h2>
            <button onClick={()=> {handleSaveClick()}}>click</button>
        </div>
    );
}

export default App;