import React from 'react';

import img1 from '../images/img_1.png';
import img2 from '../images/img_2.png';

function Content() {
    return (
        <div id="content" className="container-part">
            <div className="row card-2">
                <div className="col">
                    <h5 className="tx-w-500 tx-s-l">Creative work, creative mind</h5>
                    <h1 className="tx-w-600 tx-s-xlr">We Are Digital Creative Agency</h1>
                    <p className="tx-w-400 tx-s-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed
                        metus id et viverra augue.</p>
                    <button className="tx-w-500 tx-s-s">Get It Touch</button>
                </div>
                <div className="row">
                    <img src={img1} alt="" className="brd-radius"/>
                        <img src={img2} alt="" className="brd-radius"/>
                </div>
            </div>
        </div>
    );
}
export default Content;