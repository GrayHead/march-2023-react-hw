import {useState} from "react";

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const change = () => {
        setValue(prev => !prev)
    }

    return {value, change}
}


export {
    useToggle
}
