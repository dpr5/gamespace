import React from "react";
import "./navbarstyles.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-link-row-container">
        <div>
          <HomeOutlinedIcon />
        </div>

        <Link className="links" to="/home">
          Home
        </Link>
      </div>

      <div className="navbar-link-row-container">
        <div>
          <InfoOutlinedIcon />
        </div>

        <Link className="links" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-link-row-container">
        <div>
          <PeopleAltOutlinedIcon />
        </div>

        <Link className="links" to="/users">
          Users
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
