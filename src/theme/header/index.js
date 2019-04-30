import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div id="header">
          <ul>
            <li><a href="/" className="logo">Film App</a> </li>
            <li><a href="/">Home</a></li>
          </ul>
      </div>
    );
  }
}

export default Header;