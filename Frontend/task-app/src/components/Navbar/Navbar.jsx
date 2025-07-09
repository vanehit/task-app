import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-jr bg-light shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand text-jr" to="/">
          📝 TaskApp 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-jr" : "")
                }
              >
                Inicio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
