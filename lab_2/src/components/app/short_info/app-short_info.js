
import React, { Component } from 'react';

import './app-short_info.css';


export default class AppShort_info extends Component {

  render() {
    return (
        <div id="shortInfo" className="row container-part">
            <div id="design" className="row">
                <div className="icon-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <path
                            d="M18.7425 2.22739C18.9394 2.03047 19.05 1.7634 19.05 1.48492C19.05 1.20645 18.9394 0.939375 18.7425 0.742462C18.5455 0.545549 18.2785 0.434925 18 0.434925C17.7215 0.434925 17.4545 0.545549 17.2575 0.742462L14.2877 3.71231C13.6969 4.30305 13.3651 5.10427 13.3651 5.9397C13.3651 6.77513 13.6969 7.57634 14.2877 8.16708L14.5995 8.47892L7.85797 10.8845C7.05238 11.1722 6.32931 11.6525 5.75167 12.2834C5.17403 12.9144 4.75932 13.6769 4.54362 14.5047L0.914458 28.4185C0.787945 28.9048 0.790749 29.4158 0.922592 29.9008C1.05444 30.3857 1.31074 30.8278 1.6661 31.1831C2.02145 31.5385 2.46352 31.7948 2.94847 31.9266C3.43341 32.0585 3.9444 32.0613 4.43076 31.9348L18.3445 28.3056C19.1722 28.0896 19.9345 27.6745 20.5652 27.0966C21.1959 26.5187 21.6758 25.7955 21.9633 24.9898L24.3703 18.2497L24.6822 18.5616C25.2729 19.1523 26.0741 19.4842 26.9095 19.4842C27.745 19.4842 28.5462 19.1523 29.1369 18.5616L32.1068 15.5917C32.3037 15.3948 32.4143 15.1277 32.4143 14.8492C32.4143 14.5708 32.3037 14.3037 32.1068 14.1068C31.9099 13.9099 31.6428 13.7992 31.3643 13.7992C31.0858 13.7992 30.8188 13.9099 30.6219 14.1068L27.652 17.0766C27.4551 17.2735 27.188 17.3842 26.9095 17.3842C26.6311 17.3842 26.364 17.2735 26.1671 17.0766L15.7726 6.68216C15.5757 6.48525 15.4651 6.21817 15.4651 5.9397C15.4651 5.66122 15.5757 5.39415 15.7726 5.19724L18.7425 2.22739ZM22.728 16.6074L19.9853 24.2859C19.8126 24.7688 19.5245 25.2022 19.1461 25.5485C18.7678 25.8947 18.3106 26.1433 17.8144 26.2728L4.61935 29.7148L13.0017 21.3324C13.4483 21.4521 13.9218 21.421 14.3489 21.2441C14.776 21.0672 15.1328 20.7543 15.3639 20.354C15.5951 19.9536 15.6876 19.4882 15.6273 19.0299C15.567 18.5715 15.3571 18.1459 15.0302 17.8191C14.7033 17.4922 14.2777 17.2823 13.8194 17.2219C13.361 17.1616 12.8956 17.2542 12.4953 17.4853C12.0949 17.7165 11.782 18.0733 11.6051 18.5003C11.4282 18.9274 11.3972 19.401 11.5168 19.8475L3.13442 28.2299L6.57499 15.0363C6.70441 14.5401 6.95305 14.0829 7.2993 13.7046C7.64555 13.3262 8.07894 13.0382 8.56182 12.8654L16.2418 10.1212L22.728 16.6074Z"
                            fill="white"/>
                    </svg>
                </div>
                <div className="col">
                    <h6 className="tx-w-500 tx-s-m">Design</h6>
                    <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
                        id et viverra augue.</p>
                </div>
            </div>
            <div id="development" className="row">
                <div className="icon-bg">
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 2V6H2V2H6ZM0 0V8H8V0H0ZM16 5V9H12V5H16ZM10 3V11H18V3H10ZM6 14V18H2V14H6ZM0 12V20H8V12H0Z"
                            fill="white"/>
                        <path
                            d="M20 8V14H14V20H8V28H28V8H20ZM16 16H20V20H16V16ZM14 26H10V22H14V26ZM20 26H16V22H20V26ZM26 26H22V22H26V26ZM26 20H22V16H26V20ZM22 14V10H26V14H22Z"
                            fill="white"/>
                    </svg>
                </div>
                <div className="col">
                    <h6 className="tx-w-500 tx-s-m">Development</h6>
                    <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
                        id et viverra augue.</p>
                </div>
            </div>
            <div id="testing" className="row">
                <div className="icon-bg">
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="17" fill="#006380"/>
                        <path d="M47.4046 20L31.2763 37.7504L26.5954 34.1818H24L31.2763 46L50 20H47.4046Z"
                              fill="white"/>
                        <path
                            d="M44.9455 46.3498C44.9455 46.6271 44.714 46.8581 44.4364 46.8581H23.6562C23.3785 46.8581 23.1471 46.6271 23.1471 46.3498V25.604C23.1471 25.3267 23.3785 25.0957 23.6562 25.0957H37.8645L40.6876 22H21.0182C20.4628 22 20 22.462 20 23.0165V48.9373C20 49.538 20.4628 50 21.0182 50H46.9818C47.5372 50 48 49.538 48 48.9835V28.7921L44.8992 33.1353C44.9455 33.1353 44.9455 46.3498 44.9455 46.3498"
                            fill="white"/>
                    </svg>
                </div>
                <div className="col">
                    <h6 className="tx-w-500 tx-s-m">Testing & QA</h6>
                    <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
                        id et viverra augue.</p>
                </div>
            </div>
        </div>
    );
  };
};