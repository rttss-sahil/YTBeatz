import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SettingPage from './components/MainPage/SettingPage/SettingPage';

import './App.scss';
import './global.scss';
import MainPage from './components/MainPage/MainPage/MainPage';

import font from './assets/fonts/BrandonRegular.woff';

const App = ({ display }) => {
  document.documentElement.style.setProperty("--bgColor", display.backgroundColor);
  document.documentElement.style.setProperty("--accentColor", display.accentColor);
  localStorage.clear()
  if (!localStorage.getItem('font')) {
    localStorage.setItem('font', font)
  }

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/settings"><SettingPage /></Route>
          <Route exact path="/"><MainPage /></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  display: state.displayReducer
})

export default connect(mapStateToProps)(App);
