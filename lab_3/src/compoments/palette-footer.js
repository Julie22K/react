import React from 'react';
import {Link, useParams} from "react-router-dom";

import '../css/palette_page.css';

function PaletteFooter(props) {
    return (
        <div id="palette-footer"><h3>{props.name+" "+props.emoji}</h3>
        </div>
    );
}

export default PaletteFooter;