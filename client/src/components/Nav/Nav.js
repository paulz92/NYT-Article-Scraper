import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse bg-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          New York Times Article Scrubber
        </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><a href="/search">Search<span className="sr-only">(current)</span></a></li>
          <li><a href="/saved">Saved</a></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
