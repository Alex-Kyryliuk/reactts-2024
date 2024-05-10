// useStorage - hook that allows a component to store a value in the browser's LocalStorage

import {useState} from "react";

export const useStorage = ()=>{
    const [save, setSave] = useState<number>(0)

    const isSave = () => {
        setSave(save + 1)
    }

    return {save, isSave};
}