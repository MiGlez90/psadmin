"use strict";

var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src="images/fixter.png" alt="pluralsight" width="140" height="35"/>
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
