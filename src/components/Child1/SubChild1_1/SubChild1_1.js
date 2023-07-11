import {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";

const SubChild11 = () => {
    const {data} = useContext(Context);
    return (
        <div>
            {data.map(item=><div key={item}>{item}</div>)}
        </div>
    );
};

export {SubChild11};
