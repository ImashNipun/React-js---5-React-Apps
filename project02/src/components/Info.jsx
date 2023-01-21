import React from "react";
import profile from "../images/profile01.jpg"

export default function Info() {
  return (
    <div className="info-sec">
      <img src={profile} alt="profile" className="profile-img" width="300px"/>
      <h1 className="name">Charlotte Smith</h1>
      <h3 className="job">Graphic Designer</h3>
      <h4 className="potfolio">charlottesmith.com</h4>
      <button>Email</button>
      <button>Linkedin</button>
    </div>
  );
}
