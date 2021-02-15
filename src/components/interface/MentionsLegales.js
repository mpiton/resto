import React, { Component } from "react";

export default class MentionsLegales extends Component {
  render() {
    return (
      <div className="cookies">
        <p className="d-inline">
          En poursuivant votre navigation sur ce site, vous acceptez
          l'utilisation de cookies de mesure d'audience.{" "}
        </p>
        <a className="d-inline" href="/">
          <span style={{ color: "#fff", textDecoration: "underline" }}>
            En savoir plus
          </span>
        </a>
      </div>
    );
  }
}
