import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>I am a card</p>
    </div>
  );
}

export default Card;
