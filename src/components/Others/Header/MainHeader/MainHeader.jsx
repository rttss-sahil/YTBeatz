import React from "react";

import { ImSearch } from "react-icons/im";

import "./MainHeader.css";

const MainHeader = ({ currentPage }) => {
  const currentPageTitle = () => {
    switch (currentPage) {
      case "HomePage":
        return "My Home";
      case "RecommendedPage":
        return "Recommended";
      case "SettingPage":
        return "Settings";
      case "TopTracksPage":
        return "Your Top Tracks";
      default:
        return "My Profile";
    }
  };
  return (
    <div className="header flex__row">
      <div
        className={`hamburger flex__column ${
          currentPage === "SearchingPage" ? " hamburger__back" : ""
        }`}
      >
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

export default MainHeader;
