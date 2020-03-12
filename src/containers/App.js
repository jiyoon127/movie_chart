import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../routes/About';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Navigation from '../components/Navigation';
import NotFound from '../routes/NotFound';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movie_detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
