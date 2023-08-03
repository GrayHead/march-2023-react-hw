import {useRef} from "react";

import {useArray} from "../hooks/useArray";

const TestUseArray = () => {
    const {data, add, remove} = useArray([]);
    const ipt = useRef();

    const addItem = () => {
        const lastElement = data.slice(-1);
        const id = lastElement.length ? lastElement[0].id + 1 : 1
        console.log(id);
        add({id, name: ipt.current.value})
        ipt.current.value = ''
    };

    return (
        <div>
            <div>
                <input type="text" ref={ipt}/>
                <button onClick={addItem}>add</button>
            </div>
            {data.map(item => (
                <div key={item.id}>
                    {item.id}) {item.name}
                    <button onClick={() => remove(item.id)}>remove</button>
                </div>
            ))}
        </div>
    );
};

export {TestUseArray};
