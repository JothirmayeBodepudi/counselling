import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DynamicContent from './components/DynamicContent';

const Appy = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dynamic/:id" component={DynamicContent} />
      </Switch>
    </Router>
  );
};

export default Appy;
