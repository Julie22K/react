import React, { Component } from 'react';

import './app-portfolio.css';
import img7 from '../../images/img_7.png';
import img8 from '../../images/img_8.png';
import img9 from '../../images/img_9.png';

export default class AppPortfolio extends Component {

  render() {
    return (
        <div id="portfolio" className="container-part">
            <div className="row card-2">
                <div>
                    <h3 className="tx-w-500 tx-s-s">Portfolio</h3>
                    <h2 className="tx-w-600 tx-s-l">View Our Case Studies</h2>
                </div>
                <div>
                    <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</p>
                    <a href="portfolio.html">View All
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.2171 0L11.4132 0.840384L14.8237 4.40579H0V5.59433H14.8236L11.4132 9.15962L12.2171 10L17 5L12.2171 0Z"
                                fill="#4270EC"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="row">
                <img src={img7} alt=""></img>
                <img src={img8} alt=""></img>
                <img src={img9} alt=""></img>

            </div>
        </div>
    );
  };
};
