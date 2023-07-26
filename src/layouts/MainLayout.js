import {Outlet} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

const MainLayout = () => {
    const {setContext} = useContext(Context);
    return (
        <div>
            MainLayout
            <button onClick={()=>setContext('BBBBBBBBBBBBBBBBBBBBBB')}>change</button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
