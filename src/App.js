import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import './app.css';
import Lobby from './Lobby';
import Intro from './Intro';
import Summary from './Summary';
import Blog from './Blog';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className>
        <div className="panel"/>
        <Lobby />
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Lobby} />
            <Route path="/intro" component={Intro} />
            <Route path="/summary" component={Summary} />
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Router> */}

        <div className="copyright">
          COPYRIGHT © 2018 - REENUKA SARIKA RĀMPHAL
        </div>
      </div>
    );
  }
}

export default App;
