import {useState} from "react";

import {TestUseMemo} from "./components/TestUseMemo";
import {TestUseCallBack} from "./components/TestUseCallBack";
import {TestUseToggle} from "./components/TestUserToggle/TestUseToggle";
import {TestUseFetch} from "./components/TestUseFetch";
import {TestUseArray} from "./components/TestUseArray";

const App = () => {
    // const [count1, setCount1] = useState(0)
    return (
        <div>
            {/*<button onClick={()=>setCount1(prev=>++prev)}>inc1</button>*/}
            {/*<TestUseMemo count1={count1}/>*/}
            {/*<TestUseCallBack count1={count1}/>*/}
            {/*<TestUseToggle/>*/}
            {/*<TestUseFetch/>*/}
            <TestUseArray/>
        </div>
    );
};

export {App};
