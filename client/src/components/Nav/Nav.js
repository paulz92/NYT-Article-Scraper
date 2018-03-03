import React from "react";
import { Link } from 'react-router-dom';

const Nav = () =>
  <nav className="navbar navbar-inverse bg-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">
          New York Times Article Scraper
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
