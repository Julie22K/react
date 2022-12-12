import React from 'react';

import pers1 from '../images/pers_1.png';
import pers2 from '../images/pers_2.png';
import pers3 from '../images/pers_3.png';
import pers4 from '../images/pers_4.png';
import pers5 from '../images/pers_5.png';
import pers6 from '../images/pers_6.png';
import pers7 from '../images/pers_7.png';

function Testimony ()  {
    return (
        <div id="testimony" class="container-part">
            <center>
                <h3 className="tx-w-500 tx-s-s">Testimony</h3>
                <h2 className="tx-w-600 tx-s-l">What Do Our Clients Says About Us</h2>
                <p className="tx-w-400 tx-s-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper
                    mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam.
                    Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu
                    suspendisse quis.</p>

                <h4 className="tx-w-500 tx-s-s">James Jokovic</h4>
                <h5 className="tx-w-400 tx-s-sr">IT Consultant</h5>
                <svg width="71" height="12" viewBox="0 0 71 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#4270EB"/>
                    <circle cx="26" cy="6" r="5" fill="#B3C7F8"/>
                    <circle cx="46" cy="6" r="5" fill="#B3C7F8"/>
                    <circle cx="66" cy="6" r="5" fill="#B3C7F8"/>
                </svg>
                <img id="img_centre" src={pers4} alt=""/>
                <img id="img_topleft" src={pers1} alt=""/>
                <img id="img_medleft" src={pers2} alt=""/>
                <img id="img_botleft" src={pers3} alt=""/>
                <img id="img_topright" src={pers5} alt=""/>
                <img id="img_medright" src={pers6} alt=""/>
                <img id="img_botright" src={pers7} alt=""/>
            </center>
        </div>
    );
};

export default Testimony;