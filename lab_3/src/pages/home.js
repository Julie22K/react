import React from 'react';
import Header from "../compoments/header";
import Main from "../compoments/main";
import Footer from "../compoments/footer";
import '../css/home.css';
import data from '../pallete.json';
function Home() {
    return (
        <div id="page-home">
            <Header/>
            <Main data={data}/>
            <Footer/>
        </div>
    );
}

export default Home;