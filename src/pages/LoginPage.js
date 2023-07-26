import {useContext, useRef} from "react";
import {Context} from "../hoc/AuthContextProvider";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {setAuthContext} = useContext(Context)
    const inp = useRef();
    const navigate = useNavigate();
    const {state} = useLocation();
    const login = () => {
        const value = inp.current.value;

        if (value) {
            setAuthContext(prev => ({...prev, isAuth: true}))
            if (value === 'admin') {
                setAuthContext(prev => ({...prev, isAdmin: true}))
            }

            navigate(state || '/info')
        }
    };

    return (
        <div>
            <input type="text" placeholder={'username'} ref={inp}/>
            <button onClick={login}>Login</button>
        </div>
    );
};

export {LoginPage};
