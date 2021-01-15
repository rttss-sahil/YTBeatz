import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SettingPage from './components/MainPage/SettingPage/SettingPage';
import SearchingPage from './components/Search/SearchingPage/SearchingPage';
import SearchResultPage from './components/Search/SearchPage/SearchResultPage';

import './App.css';
import './global.css';
import MainPage from './components/MainPage/MainPage/MainPage';

const App = ({ display }) => {
  const [currentPage, setCurrentPage] = React.useState(MainPage),
    pageChangeHandler = page => {
      switch (page) {
        case "SettingPage":
          return SettingPage;
        case "SearchingPage":
          return SearchingPage;
        case "SearchResult":
          return SearchResultPage;
        default:
          return MainPage
      }
    };
  document.documentElement.style.setProperty("--bgColor", display.backgroundColor);
  document.documentElement.style.setProperty("--accentColor", display.accentColor);


  return (
    <React.Fragment>
      <Router>
        {/* <Switch> */}
        {currentPage}
        {/* </Switch> */}
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  display: state.displayReducer
})

export default connect(mapStateToProps)(App);
