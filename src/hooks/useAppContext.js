import {useContext} from "react";
import {Context} from "../hoc/AuthContextProvider";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}
