import React from "react";

const FilterNav = () => {
  return (
    <nav className="filter-nav navbar navbar-expand-lg navbar-light">
      {/* <button
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
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent2"> */}
      <form className="filter-form form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      {/* <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle btn btn-outline-info"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter By
          </button>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Xbox One
            </a>
            <a className="dropdown-item" href="#">
              Playstation 4
            </a>
            <a className="dropdown-item" href="#">
              PC
            </a>
            <a className="dropdown-item" href="#">
              Nintendo Switch
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Top Games
            </a>
            <a className="dropdown-item" href="#">
              My Games
            </a>
          </div>
        </li>
      </ul> */}
      <div className="dropdown mr-auto">
        <button
          className="btn btn-outline-info dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter By
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Xbox One
          </a>
          <a className="dropdown-item" href="#">
            Playstation 4
          </a>
          <a className="dropdown-item" href="#">
            PC
          </a>
          <a className="dropdown-item" href="#">
            Nintendo Switch
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Top Games
          </a>
          <a className="dropdown-item" href="#">
            My Games
          </a>
        </div>
      </div>
      <button className="btn btn-outline-success d-block d-sm-none">
        Add Game
      </button>
      {/* </div> */}
    </nav>
  );
};

export default FilterNav;
