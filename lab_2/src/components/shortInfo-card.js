import React from 'react';

function ShortInfo(props) {
    return (
        <div id={props.id} className="row">
            <div
                className={"icon-bg icon-bg-"+props.bg_clr}>
                {props.icon}
            </div>
            <div className="col">
                <h6 className="tx-w-500 tx-s-m">{ props.title }</h6>
                <p className="tx-w-400 tx-s-s">{ props.text }</p>
            </div>
        </div>
    );
}

export default ShortInfo;