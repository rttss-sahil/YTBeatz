import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import HomePage from './components/MainPage/HomePage/HomePage';
import RecommendedPage from './components/MainPage/RecommendedPage/RecommendedPage';
import ProfilePage from './components/MainPage/ProfilePage/ProfilePage';
import TopTracksPage from './components/MainPage/TopTracksPage/TopTracksPage';
import SettingPage from './components/MainPage/SettingPage/SettingPage';

import store from './redux/store/store';

import './App.css';
import './global.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [CurrentPage, setCurrentPage] = React.useState(RecommendedPage),

    pages = page => {
      switch (page) {
        case 1:
          return HomePage;
        case 2:
          return RecommendedPage;
        case 3:
          return TopTracksPage;
        default:
          return ProfilePage;
      }
    },
    handlePageChange = page => {
      setCurrentPage(pages(page))
    };
  document.documentElement.style.setProperty("--bgColor", store.getState().backgroundColor);
  document.documentElement.style.setProperty("--accentColor", store.getState().accentColor);


  return (
    <React.Fragment>
      <Router>
        {/* Header */}
        <Header currentPage={`${CurrentPage}`} />
        <Switch>
          {/* HomePage Route */}
          {CurrentPage}
          {/* <Route exact path="/"><HomePage /></Route> */}
        </Switch>
        {/* Footer */}
        <Footer currentPage={`${CurrentPage}`} handlePageChange={handlePageChange} />
      </Router>
    </React.Fragment>
  );
}

export default App;
