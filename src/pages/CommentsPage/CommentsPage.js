import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

import {Comments} from "../../components";
import css from './CommentsPage.module.css';

const Context = createContext(null);
const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);
    return (
        <div className={css.CommentsPage}>
            <Context.Provider value={{setCommentId}}>
                <Comments/>
            </Context.Provider>
            <Outlet context={{commentId}}/>
        </div>
    );
};

export {
    CommentsPage,
    Context
};
