import React from 'react';
import '../css/palette_page.css';

function Select(props) {
    return (
        <>
            <select
            value={props.value}
            onChange={props.onChange}>

                {props.options.map((option,index)=>{
                    return(
                        <option value={option.value} key={option.value+index}>{option.text}</option>
                    )
                })}
            </select>
        </>
    );
}

export default Select;