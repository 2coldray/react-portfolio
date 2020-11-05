import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" activeClassName="navbar-brand selected">
          Rayshawn Bray
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink to="/" className="navbar-brand">
                Home
              </NavLink>
              <NavLink to="/portfolio" className="navbar-brand">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="navbar-brand">
                Contact
              </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
