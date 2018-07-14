import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <nav id="navbar">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo">
            WiFinder
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/register">Sign-Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
