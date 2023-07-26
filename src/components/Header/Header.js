import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../hoc/AuthContextProvider";

const Header = () => {
    const {authContext: {isAuth, isAdmin}} = useContext(Context)
    return (
        <div className={css.Header}>
            <NavLink to={'info'}>Info</NavLink>
            {!isAuth && <NavLink to={'login'}>Login</NavLink>}
            {isAuth && <NavLink to={'users'}>Users</NavLink>}
            {isAdmin && <NavLink to={'admin'}>Admin</NavLink>}
        </div>
    );
};

export {Header};
