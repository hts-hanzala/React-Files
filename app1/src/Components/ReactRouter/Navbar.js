import React from "react";
import PropTypes from "prop-types";
import { Link, useMatch } from "react-router-dom";

export default function Navbar({ title, home }) {
  const match = useMatch("/topic/:id/:name");
  return (
    <div>
      {match ? (
        <div className="d-flex justify-content-between m-3">
          <h4>Greetings user to {match.params.name} page!</h4>
          <Link to={"/topic"}>
            <button className="btn btn-danger">Log Out</button>
          </Link>
        </div>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    {home}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" to="contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-disabled="true"
                    to="topic
                "
                  >
                    Topic
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

Navbar.defaultProps = {
  title: "TITLE",
  home: "HOME",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
};
