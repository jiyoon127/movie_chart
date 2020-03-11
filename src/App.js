import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import NotFound from './routes/NotFound';

const App = () => {
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
};

export default App;
