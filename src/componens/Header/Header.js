import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={css.Header}>
                <NavLink to={'cars'}>cars</NavLink>
                <NavLink to={'posts'}>posts</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
            </div>
        );
    }
}

export {Header};
