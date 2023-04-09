import React from 'react';
import { Outlet } from "react-router-dom";
import Home from './Home';
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;