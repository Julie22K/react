import React from 'react';

function Input()  {
    return (
        <div id="input__wrapper">
            <input className="tx-w-400 tx-s-s" type="text" placeholder="Your Email"/>
                <svg id="input__svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                     viewBox="0 0 17 17" fill="none">
                    <path d="M0.721029 0.050887L16.076 7.61689C16.1598 7.65815 16.2303 7.72203 16.2796 7.80129C16.3289 7.88056 16.355 7.97204 16.355 8.06539C16.355 8.15873 16.3289 8.25022 16.2796 8.32948C16.2303 8.40874 16.1598 8.47262 16.076 8.51389L0.720029 16.0799C0.634 16.1221 0.537638 16.1388 0.442419 16.1278C0.347199 16.1169 0.257135 16.0788 0.182953 16.0181C0.10877 15.9574 0.0535965 15.8767 0.0240021 15.7855C-0.00559231 15.6943 -0.00835991 15.5966 0.0160287 15.5039L1.53703 9.75889C1.56168 9.66592 1.61263 9.58205 1.68375 9.51731C1.75488 9.45257 1.84316 9.40972 1.93803 9.39389L8.81903 8.24689C8.86003 8.2401 8.89869 8.22319 8.93152 8.1977C8.96435 8.17221 8.9903 8.13893 9.00703 8.10089L9.02503 8.04089C9.03437 7.98528 9.02463 7.92814 8.9974 7.87876C8.97017 7.82939 8.92704 7.79066 8.87503 7.76889L8.81903 7.75289L1.90003 6.59989C1.80535 6.58388 1.71727 6.54095 1.64634 6.47622C1.57541 6.4115 1.52461 6.32771 1.50003 6.23489L0.0160287 0.627887C-0.0086136 0.535126 -0.00603746 0.437234 0.0234497 0.345898C0.0529368 0.254562 0.108089 0.173643 0.18232 0.112803C0.256551 0.051963 0.346724 0.0137732 0.442072 0.00279416C0.537419 -0.00818492 0.633913 0.00851068 0.720029 0.050887H0.721029Z"
                        fill="#4270EC"/>
                </svg>
        </div>
    );
}

export default Input;