import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { Link } from "react-router-dom";

class PillsMenu extends Component {
  state = {
    items: {
      default: "1"
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav pills color="secondary">
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.items["default"] === "1"}
              onClick={this.togglePills("default", "1")}
            >
            Menu du Jour
            </MDBNavLink>
          </MDBNavItem>
          <div className="sep-menu">&nbsp;</div>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.items["default"] === "2"}
              onClick={this.togglePills("default", "2")}
            >
              La Carte
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>

        <MDBTabContent activeItem={this.state.items["default"]}>
          <MDBTabPane tabId="1">
            <h1>&#10038; Menu du jour &#10038;</h1>
            <div className="especiales menu-restaurant menu-styles">
              <Link className="menu-title" href="/">
                Oeufs nuage au chorizo
              </Link>
              <span className="menu-price">5.80€</span>
              <span className="menu-subtitle">Oeuf, fromage, chorizo</span>
            </div>
            <br/>
            <div className="especiales menu-restaurant menu-styles">
              <Link className="menu-title" href="/">
              Onglet de veau rôti façon BBQ
              </Link>
              <span className="menu-price">7.30€</span>
              <span className="menu-subtitle">Veau, Sauce BBQ, Herbes de provence</span>
            </div>
            <br/>
            <div className="especiales menu-restaurant menu-styles">
              <Link className="menu-title" href="/">
              Risotto de petit pois
              </Link>
              <span className="menu-price">6.60€</span>
              <span className="menu-subtitle">Petits pois, Ail</span>
            </div>
            <br/>
            <div className="especiales menu-restaurant menu-styles">
              <Link className="menu-title" href="/">
              Cannelés maison
              </Link>
              <span className="menu-price">4.60€</span>
              <span className="menu-subtitle">Oeufs, Caramel, Rhum</span>
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="2">
           <h1>Contenu</h1>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default PillsMenu;
