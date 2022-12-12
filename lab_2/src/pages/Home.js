import React from 'react';
import Ellipse from "../components/ellipse";
import EllipseUnderImage from "../components/ellipse_under_img";
import Header from "../components/header";
import Content from "../components/content";
import ShortInfo from "../components/shortInfo";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Testimony from "../components/testimony";
import Blog from "../components/blog";
import GetItTouch from "../components/getItTouch";
import Footer from "../components/footer";



function Home() {
    return (
        <div>
            <Ellipse id={"ellipse__1"}/>
            <Ellipse id={"ellipse__2"}/>
            <Ellipse id={"ellipse__3"}/>
            <EllipseUnderImage/>

            <Content />
            <ShortInfo />
            <About />
            <Portfolio />
            <Testimony />
            <Blog />
            <GetItTouch />

        </div>
    );
}

export default Home;