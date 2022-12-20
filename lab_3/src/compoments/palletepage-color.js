import '../css/pallete.css';
import '../css/palletpage_color.css';
import React, {useContext} from "react";
import useSound from 'use-sound';
import mySound from '../sounds/src_notify.mp3';
import {Context} from './context';

function PalettePageColor(props){
    const {Copied}=useContext(Context);
    const [playSound] = useSound(mySound)
    function copyColor(){
        if(props.soundOn) playSound();
        let color=props.color;
        switch (props.Format)
        {
            case "HEX (AA1923)":
                color=color.replaceAll("#","");
                break;
            case "RGB - (1,2,3)":
                color=hexToRgb(color,1);
                break;
            case "RGBA - (1,2,3,0.4)":
                color=hexToRgba(color);
                break;
        }
        function hexToRgb(hex) {
            return "rgb("+['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0].join(",")+")";
        }
        function hexToRgba(hex,alpha) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);

            if (alpha) {
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }

            return `rgb(${r}, ${g}, ${b})`;
        }

        navigator.clipboard.writeText(color)
            .then(() => {})
            .catch(err => {
                console.log('Something went wrong', err);
            });
        Copied(color);
    }
    return (
        <div className="palette-page-color" onClick={copyColor}>
            <div className="back"
                 style={{background: props.color}}><h6>{props.name}</h6>
            </div>
            <div className="copy">
                <h4>COPY</h4>
            </div>
        </div>

    );
}

export default PalettePageColor;
