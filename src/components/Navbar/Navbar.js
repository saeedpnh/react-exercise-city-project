import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tour
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
