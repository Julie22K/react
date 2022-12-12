import React from 'react';

function BlogCard(props) {
    return (
        <div className="card">
            <img src={props.img} alt=""/>
            <div className="row">
                <p className="data tx-w-500 tx-s-sr">{props.date}</p>
                <p className="author tx-w-500 tx-s-sr">{props.author}</p>
            </div>
            <p className="tx-w-400 tx-s-s">{props.text}</p>
            <a href="#" className="tx-w-400 tx-s-s">Read More</a>
        </div>
    );
}

export default BlogCard;