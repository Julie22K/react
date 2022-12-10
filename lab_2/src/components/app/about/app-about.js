import React, { Component } from 'react';

import img6 from '../../images/img_6.jpg';
import './app-about.css';


export default class AppAbout extends Component {

  render() {
    return (
        <div id="about" className="row container-part">
            <img src={img6} alt="dd"></img>
                <div className="col">
                    <h3 className="tx-w-500 tx-s-s">About Us</h3>
                    <h2 className="tx-w-600 tx-s-l">Design & Develop For Better Solution</h2>
                    <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                        amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis
                        imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu
                        porta morbi egesta ut hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</p>
                    <button>Learn More</button>
                </div>
        </div>
    );
  };
};
