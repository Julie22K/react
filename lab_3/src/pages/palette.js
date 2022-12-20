import React,{ useState } from 'react';
import '../css/palette_page.css';
import PaletteFooter from "../compoments/palette-footer";
import PaletteMain from "../compoments/palette-main";
import PaletteHeader from "../compoments/palette-header";
import { useParams} from "react-router-dom";

import {Context} from '../compoments/context';
import CopyColor from "../compoments/copy-color";
import {Transition} from "react-transition-group";
import data from '../pallete.json';

function Palette(){
    const [Copy,setCopy]=useState(false);
    const [CopiedColor,setCopiedColor]=useState("#000000");

    const [SoundOn, setSoundOn] = useState(true);
    const {id}=useParams();
    const palette=GetPalette();
    function GetPalette() {
        return data.find(item=>item.id===id);
    }

    const SoundToggle=()=>{
        setSoundOn(!SoundOn);
    }
    const Copied=(color)=>{
        setCopiedColor(color);
        setCopy(true);
        setTimeout(()=>setCopy(false),0)
    }

    const [Format,setFormat]=useState("HEX (#AA1923)");
const options=[
    {text:"HEX (#AA1923)",value:"HEX (#AA1923)"},
    {text:"HEX (AA1923)",value:"HEX (AA1923)"},
    {text:"RGB - (1,2,3)",value:"RGB - (1,2,3)"},
    {text:"RGBA - (1,2,3,0.4)",value:"RGBA - (1,2,3,0.4)"}
];
    const changeFormat=(event)=>{
        setFormat(event.target.value);
    }


    return (
        <Context.Provider value={{SoundToggle,Copied,changeFormat}}>
            <div id="palette-page">
                <PaletteHeader
                    SoundOn={SoundOn}
                    Format={Format}
                    options={options}
                />
                <PaletteMain
                    colors={palette.colors}
                    soundOn={SoundOn}
                    Format={Format}/>
                <PaletteFooter
                    name={palette.paletteName}
                    emoji={palette.emoji}/>
                <Transition
                    in={Copy}
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                >
                    {state=><CopyColor classes={'copy-color '+state} color={CopiedColor}/>}
                </Transition>
            </div>
        </Context.Provider>

    );
}

export default Palette;