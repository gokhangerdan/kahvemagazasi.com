import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import './style.css';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/sepet' component={Cart} />
          <Route exact path='/profil' component={Profile} />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));