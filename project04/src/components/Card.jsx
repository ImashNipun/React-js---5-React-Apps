import React from "react";

export default function Card(props) {
  return (
    <div className="card-sec">
      <div style={{backgroundImage:`url(${props.imageurl})`}} className="card-img"></div>
      <div className="card-dec">
        <span>
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <span> {props.location} </span>
        <span>
          <a href={props.mapurl}> View on Google Map</a>
        </span>
        <h1 className="place">{props.title}</h1>
        <h6 className="duration">{props.duration.from}-{props.duration.to}</h6>
        <p className="details">{props.description}</p>
      </div>
    </div>
  );
}
