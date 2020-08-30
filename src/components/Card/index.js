import React from "react";
import "./card.css";

export default function Card({ src, title, desc, price }) {
  return (
    <div className="card">
      <img alt="" src={src} />

      <div className="card__info">
        <h2>{title}</h2>
        <h3>{desc}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  );
}
