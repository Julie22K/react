import '../css/pallete.css';
import '../css/palletpage_color.css';
import '../css/copy_color_animation.css';
import React from "react";


function CopyColor(props){
    function randomElement(items){
        return items[Math.floor(Math.random()*items.length)];
    }
    const texts = ["Copied!","Paste me!","Get it!","Right one!","It`ll Rock!"];
    const text=randomElement(texts);

    return (
        <div className={props.classes} style={{backgroundColor:props.color}}>
            <div className="title">{text}
            <span>{props.color}</span></div>
        </div>
);
}

export default CopyColor;
