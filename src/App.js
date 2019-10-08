import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './containers/About';
import Home from './containers/Home';
import Movies from './containers/Movies';

export default () => (
  <div className="app">
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </div>
);
