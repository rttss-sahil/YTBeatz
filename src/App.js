import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import HomePage from './components/MainPage/HomePage/HomePage';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(HomePage),

    handlePageChange = page => {
      setCurrentPage(page)
    };

  return (
    <React.Fragment>
      <Router>
        {/* Header */}
        <Header currentPage={currentPage} />
        <Switch>
          {/* HomePage Route */}
          {currentPage}
          {/* <Route exact path="/"><HomePage /></Route> */}
        </Switch>
        {/* Footer */}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </Router>
    </React.Fragment>
  );
}

export default App;
