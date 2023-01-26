import React from "react";

export default function Card() {
  return (
    <div className="card-sec">
      <img src="https://images.unsplash.com/photo-1586285640634-0d10d65e453e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
      <div className="card-dec">
        <span>
          <i class="fa-solid fa-location-dot"></i>
        </span>
        <span>Japan</span>
        <span>
          <a href="#">View on Google Map</a>
        </span>
        <h1 className="place">Mount Fuji</h1>
        <h6 className="duration">12-Jan-2021-24-Jan-2021</h6>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          similique quod esse sapiente eaque magni ipsa necessitatibus
          laboriosam commodi vero.
        </p>
      </div>
    </div>
  );
}
