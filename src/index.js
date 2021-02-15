import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/interface/Header';
import Content from './components/interface/Content';
import MentionsLegales from "./components/interface/MentionsLegales"
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Reserver from './components/pages/Reserver.js'
import Erreur from './components/pages/Erreur'
import Menu from './components/pages/Menu.js'
import Plan from './components/pages/Plan.js'
import Contact from './components/pages/Contact.js'

import "./styles.css";

function Index() {
  return (
    <div className="container-fluid">
      <Header />
      <Content/>
      <MentionsLegales />
    </div>
  );
}

class App extends Component {

  render() {
     return (
       <React.Fragment>
      <Router> 

          <div className="container">
          <Switch>
            <Route exact path="/" render= { () => { return (Index()); }} />
            <Route exact path="/reserver" component={Reserver}/>
            <Route exact path="/menu" component={Menu}/> 
            <Route exact path="/contact" component={Contact}/> 
            <Route exact path="/plan" component={Plan}/> 
            <Route component={Erreur}/>
            </Switch>
          </div>
        
    </Router>
    </React.Fragment>
   
  );
  }
}

export default App;
ReactDOM.render(<App/>, document.getElementById('root'));


