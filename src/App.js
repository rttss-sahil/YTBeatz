import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import HomePage from './components/MainPage/HomePage/HomePage';
import RecommendedPage from './components/MainPage/RecommendedPage/RecommendedPage';
import ProfilePage from './components/MainPage/ProfilePage/ProfilePage';
import TopTrackPage from './components/MainPage/TopTracksPage/TopTracksPage';
import SettingPage from './components/MainPage/SettingPage/SettingPage';


import './App.css';
import './global.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(RecommendedPage),

    handlePageChange = page => {
      setCurrentPage(page)
    };

  return (
    <React.Fragment>
      <Router>
        {/* Header */}
        <Header currentPage={currentPage.props.children} />
        <Switch>
          {/* HomePage Route */}
          {currentPage}
          {/* <Route exact path="/"><HomePage /></Route> */}
        </Switch>
        {/* Footer */}
        <Footer currentPage={currentPage.props.children} handlePageChange={handlePageChange} />
      </Router>
    </React.Fragment>
  );
}

export default App;
