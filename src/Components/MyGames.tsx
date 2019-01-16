import React from "react";

const MyGames = () => {
  return (
    // <div>
    //   <h3>My Games</h3>
    //   <ul>
    //     <li>Fortnite</li>
    //     <li>World Of Warcraft</li>
    //   </ul>
    //   <button className="btn btn-success">Add Game</button>
    // </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">My Games</h5>
        <p>
          <a href="#" className="card-link">
            Fortnight
          </a>
        </p>
        <p>
          <a href="#" className="card-link">
            Heroes Of the Storm
          </a>
        </p>
        <p>
          <a href="#" className="card-link">
            Halo 5
          </a>
        </p>
        <button className="btn btn-success">Add Game</button>
      </div>
    </div>
  );
};

export default MyGames;
