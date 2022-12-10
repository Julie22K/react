import React, { Component } from 'react';

import './app-header.css';
import AppBrand from "../app-brand";


export default class AppHeader extends Component {

  render() {
    return (
        <div id="header" className="container-part">
            <div className="nav">
                <AppBrand />
                <div className="nav-right">
                    <a href="#" className="active">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Testimony</a>
                    <a href="#">News</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    );
  };
};
