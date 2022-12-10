import React, { Component } from 'react';

import './app-blog.css';
import img3 from '../../images/img_3.png';
import img4 from '../../images/img_4.png';
import img5 from '../../images/img_5.png';

export default class AppBlog extends Component {

  render() {
    return (
        <div id="blog" className="container-part">
            <center>
                <h6 className="tx-w-500 tx-s-s">Blog</h6>
                <h2 className="tx-w-600 tx-s-lr">Read Our News</h2>
            </center>
            <div className="row">
                <div className="card">
                    <img src={img3} alt=""></img>
                    <div className="row">
                            <p className="data tx-w-500 tx-s-sr">09 April,2022</p>
                            <p className="autor tx-w-500 tx-s-sr">by Admin</p>
                        </div>
                    <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, consecte adipiscing elit ut
                            aliquam</p>
                    <a href="#" className="tx-w-400 tx-s-s">Read More</a>
                </div>
                <div className="card">
                    <img src={img4} alt=""></img>
                        <div className="row">
                            <p className="data tx-w-500 tx-s-sr">09 April,2022</p>
                            <p className="autor tx-w-500 tx-s-sr">by Admin</p>
                        </div>
                        <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, consecte adipiscing elit ut
                            aliquam</p>
                        <a href="#" className="tx-w-400 tx-s-s">Read More</a>
                </div>
                <div className="card">
                    <img src={img5} alt=""></img>
                        <div className="row">
                            <p className="data tx-w-500 tx-s-sr">09 April,2022</p>
                            <p className="autor tx-w-500 tx-s-sr">by Admin</p>
                        </div>
                        <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, consecte adipiscing elit ut
                            aliquam</p>
                        <a href="#" className="tx-w-400 tx-s-s">Read More</a>
                </div>
            </div>
        </div>
    );
  };
};
