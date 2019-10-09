import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DrawerLayout from './components/DrawerLayout';
import About from './containers/About';
import Home from './containers/Home';
import Movies from './containers/Movies';
import Movie from './containers/Movie';

export default () => (
  <Router>
    <DrawerLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies?genre=:genre" component={Movies} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:id" component={Movie} />
        <Route exact path="/about" component={About} />
      </Switch>
    </DrawerLayout>
  </Router>
);
