import React from 'react';

import BlogCard from "./blog-card";

import img1 from "../images/img_3.png";
import img2 from "../images/img_4.png";
import img3 from "../images/img_5.png";


function Blog() {
    return (
        <div id="blog" className="container-part">
            <center>
                <h6 className="tx-w-500 tx-s-s">Blog</h6>
                <h2 className="tx-w-600 tx-s-lr">Read Our News</h2>
            </center>
            <div className="row">
                <BlogCard img={img1}  date="09 April,2022"  author="by Admin"  text="Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam"/>
                <BlogCard img={img2}  date="09 April,2022"  author="by Admin"  text="Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam"/>
                <BlogCard img={img3}  date="09 April,2022"  author="by Admin"  text="Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam"/>

            </div>
        </div>
    );
}

export default Blog;