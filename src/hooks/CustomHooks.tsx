// useStorage - hook that allows a component to store a value in the browser's LocalStorage
import {useState} from "react";

export const useStorage = ()=>{
    const [save, setSave] = useState<number>(0)
    const [getSave, setGetSave] = useState(() => {
        const saveStorage = localStorage.getItem('table');
        return saveStorage ? JSON.parse(saveStorage) : save;
    });

    const isSave = () => {
        setSave(save + 1)
    }

    const handleSaveClick = () => {
        const updatedSave = getSave + 1;
        setGetSave(updatedSave);
        localStorage.setItem("table", JSON.stringify(updatedSave));
    };

    return { save, isSave, getSave, handleSaveClick };

}