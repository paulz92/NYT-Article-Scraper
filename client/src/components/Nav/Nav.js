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
          New York Times Article Scrubber
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><Link to="/search">Search<span className="sr-only">(current)</span></Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
