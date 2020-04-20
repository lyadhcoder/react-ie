import React, { Component } from 'react'
import Logo from '../logo/logo_white.png';
import { NavLink } from 'react-router-dom';
// import Sticky_Logo from '../logo/sticky_logo.png';
export class PageNavbar extends Component {
  render() {
    return (
      <header className="header fixed-top">
      <div className="fixed-top header-main style--one">
          <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
          <img src={Logo} className="d-inline-block align-top" alt="" />
          </a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
              {/* Header Style One End */}
    </header>

    )
  }
}

export default PageNavbar
