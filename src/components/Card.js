import React from "react";
import Swimmer from "../images/swimmer.png";
import Star from "../images/star.png";

export default function Card() {
  return (
    <div className="card_container">
      <img src={Swimmer} className="card_image" />
      <div className="card_stats">
        <img src={Star} className="card_star"/>
        <span>5.0</span>
        <span className="gray">(6) · </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}
