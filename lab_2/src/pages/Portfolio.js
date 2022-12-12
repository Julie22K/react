import React from 'react';
import Header from "../components/header";

import bathroom_1 from "../images/portfolio/bathroom_1.jpg";
import bathroom_2 from "../images/portfolio/bathroom_2.jpg";
import bathroom_3 from "../images/portfolio/bathroom_3.jpg";
import bathroom_4 from "../images/portfolio/bathroom_4.jpg";
import bathroom_5 from "../images/portfolio/bathroom_5.jpg";
import kitchen_1 from "../images/portfolio/kitchen_1.jpg";
import kitchen_2 from "../images/portfolio/kitchen_2.jpg";
import kitchen_3 from "../images/portfolio/kitchen_3.jpg";
import kitchen_4 from "../images/portfolio/kitchen_4.jpg";
import living_room_1 from "../images/portfolio/living_room_1.jpg";
import bedroom_1 from "../images/portfolio/bedroom_1.jpg";
import room_1 from "../images/portfolio/room_1.jpg";
import Footer from "../components/footer";

function PortfolioPage() {
    return (
        <div>
            <div className="ellipse" id="ellipse__4"></div>

            <div id="portfolio_gallery" className="container-part">

                <h1 className="tx-w-600 tx-s-xlr">Portfolio</h1>
                <div className="gallery">
                    <div className="column">
                        <div><img src={bathroom_3} alt=""/></div>
                        <div><img src={bathroom_1} alt=""/></div>
                        <div><img src={kitchen_3} alt=""/></div>
                    </div>
                    <div className="column">
                        <div><img src={living_room_1} alt=""/></div>
                        <div><img src={kitchen_2} alt=""/></div>
                        <div><img src={bathroom_2} alt=""/></div>
                    </div>
                    <div className="column">
                        <div><img src={kitchen_1} alt=""/></div>
                        <div><img src={bedroom_1} alt=""/></div>
                        <div><img src={bathroom_4} alt=""/></div>
                    </div>
                    <div className="column">
                        <div><img src={room_1} alt=""/></div>
                        <div><img src={kitchen_4} alt=""/></div>
                        <div><img src={bathroom_5} alt=""/></div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default PortfolioPage;