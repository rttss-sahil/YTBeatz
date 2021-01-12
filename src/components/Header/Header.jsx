import React from "react";

import { ImSearch } from "react-icons/im";

import store from "../../redux/store/store";

import "./Header.css";

const Header = ({ currentPage }) => {
  const currentPageTitle = () => {
    switch (currentPage) {
      case "HomePage":
        return "Home";
      case "ProfilePage":
        return "profile";
      case "RecommendedPage":
        return "Recommended";
      case "SettingPage":
        return "Settings";
      case "TopTrackPage":
        return "Your Top Tracks";
      default:
        return "Not Found";
    }
  };
  return (
    <div
      className="header flex__row"
      style={{
        backgroundColor: store.getState().backgroundColor,
        color: store.getState().accentColor,
      }}
    >
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
