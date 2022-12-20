import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import '../css/palette_page.css';
import {Context} from './context'
import Select from "./select";

function PaletteHeader(props) {
    const Sound = props.SoundOn?"Sound On 🔊":"Sound Off 🔇"
    const {SoundToggle,changeFormat}=useContext(Context);
    return (
        <div id="palette-header">
            <Link to="/" className="link"><span>←</span>Back</Link>
            <Select
                value={props.Format}
                onChange={changeFormat}
                options={props.options}
            />
            <button onClick={SoundToggle}>{Sound}</button>
        </div>
    );
}

export default PaletteHeader;