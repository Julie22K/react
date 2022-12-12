import React from 'react';
import Header from "../components/header";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";

function Main() {
    return (
        <div id="container">
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Main;