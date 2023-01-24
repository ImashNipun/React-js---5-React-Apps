import React from 'react';


export default function NavBar(){
    return(
        <section className="card-sec">
            <img src="./images/c1.jpeg" alt="" srcset="" width="300px"/><br />
            <img src="./images/star.png" alt="" className="star" width="15px" />
            <span className="rate">5.0</span>
            <span className="r-count">(6)</span>
            <span className="location">-USA</span>
            <h6 className="title">Life Lessons with Katie Zaferes</h6>
            <h5 className="price">From $134/person</h5>
        </section>
    )
}