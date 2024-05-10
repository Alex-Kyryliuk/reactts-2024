// usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useEffect, useRef} from "react";

export const usePrevious = (value: number) => {
    const currentRef = useRef(0);

    useEffect(() => {
        currentRef.current = value
    }, [value]);

    return currentRef.current


}

