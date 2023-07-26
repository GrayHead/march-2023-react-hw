import {createContext, useState} from "react";

const Context = createContext(null);
const AuthContextProvider = ({children}) => {
    const [authContext, setAuthContext] = useState({isAuth: false, isAdmin: false})
    return (
        <Context.Provider value={{authContext, setAuthContext}}>
            {children}
        </Context.Provider>
    );
};

export {
    AuthContextProvider,
    Context
};
