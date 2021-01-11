import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* HomePage Route */}
          <Route exact path="/"><HomePage /></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
