import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Courtney from "./pages/courtney/courtney";
import TaraComponent from "./pages/tara/tara";
import Charlie from "./pages/Charlie/Charlie";
import Nathan from "./pages/nathan/nathan";
import Marley from "./pages/marley/marley";
import Quinn from "./pages/quinn/quinn";
import Arnell from "./pages/arnell/arnell";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/courtney" component={Courtney} />
            <Route path="/tara" component={TaraComponent} />
            <Route path="/charlie" component={Charlie} />
            <Route path="/nathan" component={Nathan} />
            <Route path="/arnell" component={Arnell} />
            <Route path="/marley" component={Marley} />
            <Route path="/quinn" component={Quinn} />
          </Switch>
        </Router>
      </div>
    );
  }
}
