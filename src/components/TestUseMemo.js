import {useMemo, useState} from "react";

const TestUseMemo = ({count1}) => {
    const [count2, setCount2] = useState(0)
    const someFun = () => {
        let res = 0
        for (let i = 0; i < 1000000000; i++) {
            res += count1
        }
        return res
    }
    const res = useMemo(() => someFun(), [count1])

    return (
        <div>
            <div>res: {res}</div>
            <div>count1: {count1}</div>
            <div>count2: {count2}</div>
            <button onClick={() => setCount2(prev => ++prev)}>inc2</button>
        </div>
    );
};

export {TestUseMemo};
