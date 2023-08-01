import React, {Component} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../componens/Header/Header";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
            </div>
        );
    }
}

export {MainLayout};
