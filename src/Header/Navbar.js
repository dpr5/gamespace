import React from "react";
import "./navbarstyles.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link className="links" to="/home">
        Home
      </Link>

      <Link className="links" to="/about">
        About
      </Link>

      <Link className="links" to="/users">
        Users
      </Link>
    </div>
  );
}

export default Navbar;
