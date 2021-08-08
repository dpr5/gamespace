import React, { Component } from "react";
import "./header-menu-style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class HeaderMenu extends Component {
  render() {
    return (
      <div className="header-menu">
        <nav className="header-links">
          <Router>
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/users">Users</Link>
          </Router>
        </nav>
      </div>
    );
  }
}

export default HeaderMenu;
