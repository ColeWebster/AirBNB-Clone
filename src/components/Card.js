import React from "react";
import Star from "../images/star.png";
import cardData from "../data";

export default function Card() {
  const siteCards = cardData.map(card => {
    return (
      <div className="card_container">
        <img src={`../images/${card.coverImg}`} className="card_image" />
        <div className="card_stats">
          <img src={Star} className="card_star" />
          <span>{card.stats.rating}</span>
          <span className="gray">{card.stats.reviewCount} · </span>
          <span className="gray">{card.location}</span>
        </div>
        <p>{card.title}</p>
        <p>
          <span className="bold">From ${card.price}</span> / person
        </p>
      </div>
    );
  });

  return (
    <div className="card_row">
      {siteCards}
    </div>
  )
}
