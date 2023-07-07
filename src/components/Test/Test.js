import {useEffect, useState} from "react";

const Test = () => {
    console.log('start');
    const [asd, setAsd] = useState([]);
    useEffect(() => {
        setAsd([1,2,3])
    }, [])
    return (
        <div>
            {asd}
            <button onClick={()=>setAsd(prevState => [...prevState, 55])}>push</button>
        </div>
    );
};

export {Test};
