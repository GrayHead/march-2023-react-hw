import {useContext} from "react";
import {Context} from "./AuthContextProvider";
import {Navigate, useLocation} from "react-router-dom";

const AdminRequired = ({children}) => {
    const {authContext:{isAdmin}} = useContext(Context)
    const {pathname} = useLocation();

    if (!isAdmin){
        return <Navigate to={'/login'} state={pathname}/>
    }
    return children
};

export {AdminRequired};
