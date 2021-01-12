import React from "react";

import { ImSearch } from "react-icons/im";

import "./Header.css";

const Header = ({ currentPage }) => {
  const currentPageTitle = () => {
    switch (currentPage) {
      case "HomePage":
        return "Home";
      case "ProfilePage":
        return "My Profile";
      case "RecommendedPage":
        return "Recommended";
      case "SettingPage":
        return "Settings";
      case "TopTracksPage":
        return "Your Top Tracks";
      default:
        return "Not Found";
    }
  };
  return (
    <div className="header flex__row">
      {console.log(currentPage)}
      <div className="hamburger flex__column">
        <div className="hamburger__line border999"></div>
        <div className="hamburger__line border999"></div>
        <div className="hamburger__line border999"></div>
      </div>
      <h2 className="header__title">{currentPageTitle()}</h2>
      <div className="header__search">
        <ImSearch />
      </div>
    </div>
  );
};

export default Header;
