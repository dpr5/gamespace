import React from "react";
import "./header-menu-style.css";
import { Link } from "react-router-dom";

function HeaderMenu(props) {
  return (
    <div className="header-menu">
      <nav className="header-links">
        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
}

export default HeaderMenu;
