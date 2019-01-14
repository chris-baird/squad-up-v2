import React from "react";

const FilterNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent2"
        aria-controls="navbarSupportedContent2"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Game Filters
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent2">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Xbox One
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Playstation 4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PC
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Nintendo Switch
            </a>
          </li>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Add Game
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default FilterNav;
