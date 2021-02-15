import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar-mobile">
          <img src="/img/logo.png" id="logo" className="bg-white" alt="brand" />
          <Link to="/">
            <img src="/img/brand.png" className="" alt="brand" />
          </Link>
          <Router>
            <div className="container-fluid">
              <ul className="navbar-mobile__list list-unstyled text-center">
                <li>
                  <Link to="/reserver">Réserver</Link>
                </li>
                <li>
                  <Link to="/menu">La Carte</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/plan">Plan d'accès</Link>
                </li>
              </ul>
            </div>
          </Router>
          <div className="container-fluid nav-footer text-center">
            <div className="rs">
              <p>Retrouvez-nous sur</p>
              <i className="fa fa-facebook-square fa-2x" />
              <i className="fa fa-twitter-square fa-2x" />
              <i className="fa fa-linkedin-square fa-2x" />
              <i className="fa fa-youtube-square fa-2x" />
            </div>
            <p>© COPYRIGHT 2019 - PITON</p>
            <Router>
              <ul className="list-unstyled text-center">
                <li>
                  <a href="/">Mentions Légales</a>
                </li>
                <li>
                  <a href="/">Recrutement</a>
                </li>
              </ul>
            </Router>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
