import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css';
import {useSelector} from "react-redux";
import firsts from '../assets/images/1.png';
import second from '../assets/images/2.jpeg';
// import third from '../assets/images/3.svg';
import {ReactComponent as Apple} from '../assets/images/3.svg';

const MainLayout = () => {
    const {themeCheck} = useSelector(state => state.theme);
    return (
        <div className={themeCheck?css.black:css.white}>
            <img src={firsts} alt=""/>
            <img src={second} alt=""/>
            {/*<img src={third} alt=""/>*/}
            <Apple/>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
