import React from "react";
import Star from "../images/star.png";
import cardData from "../data";

export default function Card() {
  const siteCards = cardData.map((card) => {
    let badgeText;
    if (card.openSpots === 0) {
      badgeText = "Sold Out";
    } else if (card.location === "Online") {
      badgeText = "Online";
    }

    return (
      <section className="cards_list">
          <div className="card">
            {badgeText && <div className="card_badge">{badgeText}</div>}
            <img src={`../images/${card.coverImg}`} className="card_image" />
            <div className="card_stats">
              <img src={Star} className="card_star" />
              <span>{card.stats.rating}</span>
              <span className="gray">({card.stats.reviewCount}) · </span>
              <span className="gray">{card.location}</span>
            </div>
            <div className="card_title">{card.title}</div>
            <div className="card_price">
              <span className="bold">From ${card.price}</span> / person{" "}
            </div>
          </div>  
      </section>
    );
  });

  return (
    <section className="card_row">
      {siteCards}
    </section>
  );
}
