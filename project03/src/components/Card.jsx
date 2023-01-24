import React from 'react';


export default function Card(props){
    return(
        <section className="card-sec">
            <div className="b-img" style={{backgroundImage:"url("+"./images/"+`${props.coverImg}`+")"}}></div>
            {/* <img src="./images/c1.jpeg" alt="" srcset="" className='banner'/><br /> */}
            <img src="./images/star.png" alt="" className="star" width="15px" />
            <span className="rate">{props.stats.rating}</span>
            <span className="r-count">({props.stats.reviewCount})</span>
            <span className="location">- {props.location}</span>
            <h6 className="title">{props.title}</h6>
            <h5 className="price">From ${props.price}/person</h5>
        </section>
    )
}