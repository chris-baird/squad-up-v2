import React from "react";

const GameCard = () => {
  return (
    <div className="card">
      <img
        src="https://placeimg.com/600/800/any"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Game Title</h5>
        <p className="card-text">5 Squads</p>
      </div>
    </div>
  );
};

export default GameCard;
