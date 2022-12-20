import React from 'react';
import PalettePageColor from "./palletepage-color";

function PaletteMain(props) {
    return (
    <div id="palette-main">
        <PalettePageColor color={props.colors[0].color} name={props.colors[0].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[1].color} name={props.colors[1].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[2].color} name={props.colors[2].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[3].color} name={props.colors[3].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[4].color} name={props.colors[4].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[5].color} name={props.colors[5].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[6].color} name={props.colors[6].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[7].color} name={props.colors[7].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[8].color} name={props.colors[8].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[9].color} name={props.colors[9].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[10].color} name={props.colors[10].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[11].color} name={props.colors[11].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[12].color} name={props.colors[12].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[13].color} name={props.colors[13].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[14].color} name={props.colors[14].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[15].color} name={props.colors[15].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[16].color} name={props.colors[16].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[17].color} name={props.colors[17].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[18].color} name={props.colors[18].name} soundOn={props.soundOn} Format={props.Format}/>
        <PalettePageColor color={props.colors[19].color} name={props.colors[19].name} soundOn={props.soundOn} Format={props.Format}/>
    </div>
    );
}
export default PaletteMain;