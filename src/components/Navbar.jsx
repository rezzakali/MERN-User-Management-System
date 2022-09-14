import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <h3 className="navbar-brand">User management system</h3>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="add"
                >
                  Add user
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="all">
                  All users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
