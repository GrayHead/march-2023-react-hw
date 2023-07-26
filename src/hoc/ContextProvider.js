import {createContext, useState} from "react";
const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [context, setContext] = useState('AAAAAAAAAAAAAAAAAA')
    return (
        <Context.Provider value={{context, setContext}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};
