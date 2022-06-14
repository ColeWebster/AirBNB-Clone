
import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card_container">
      <img 
        src={`../images/${props.image}`}
        className="card_image" 
      />
      <div className="card_stats">
        <img src={Star} className="card_star"/>
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} · </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}
