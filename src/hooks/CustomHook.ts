// useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

export const useToggle = () => {
    const [toggle, setToggle] = useState<boolean>(true)

    const isToggled = ()=> {
        setToggle(!toggle);
    }

    return {toggle, isToggled};
}

