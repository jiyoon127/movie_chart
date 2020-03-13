import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../routes/About';
import HomeContainers from './HomeContainers';
import DetailContainers from './DetailContainers';
import Navigation from '../components/Navigation';
import NotFound from '../routes/NotFound';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={HomeContainers} />
          <Route path="/about" component={About} />
          <Route path="/movie_detail/:id" component={DetailContainers} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
