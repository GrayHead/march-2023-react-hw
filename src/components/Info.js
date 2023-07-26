import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

const Info = () => {
    const {context, setContext} = useContext(Context);

    return (
        <div>
            <h2>{context}</h2>

        </div>
    );
};

export {Info};
