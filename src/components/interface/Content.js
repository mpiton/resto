import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <main role="main" className="inner cover ">
          <h1 className="panel panel-default ml-4">Bienvenue chez Brand</h1>
          <p className="lead ml-4">
            There, now he's trapped in a book I wrote: a crummy world of plot
            holes and spelling errors! I was all of history's great robot actors
            - Acting Unit 0.8; Thespomat; David Duchovny! Stop! Don't shoot fire
            stick in space canoe! Cause explosive decompression! I had more, but
            you go ahead. There, now he's trapped in a book I wrote: a crummy
            world of plot holes and spelling errors! In our darkest hour, we can
            stand erect, with proud upthrust bosoms. I wish! It's a nickel.
          </p>
          <p className="lead text-center">
            <a href="/" className="btn btn-lg btn-outline-success">
              Réserver
            </a>
          </p>
          <hr className="hr-style" />

          <h2 className="ml-4">Pour recevoir notre newsletter:</h2>
          <div className="input-group">
            <div className="input-group-prepend ml-4">
              <span className="input-group-text" id="champ-email">
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="champ-email"
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
