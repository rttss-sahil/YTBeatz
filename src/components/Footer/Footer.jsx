import React from "react";

import store from "../../redux/store/store";

import { IoIosTrendingUp } from "react-icons/io";
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { GiAlliedStar, GiDoctorFace, GiHumanTarget } from "react-icons/gi";
import { GrStar } from "react-icons/gr";
import { HiTrendingUp } from "react-icons/hi";

import "./Footer.css";

const Footer = ({ currentPage, handleClick }) => {
  return (
    <div
      className="footer flex__row"
      style={{
        backgroundColor: store.getState().backgroundColor,
        color: store.getState().accentColor,
      }}
    >
      <div className="footer__icon" onClick={handleClick}>
        {currentPage === "HomePage" ? <IoHome /> : <IoHomeOutline />}
      </div>
      <div className="footer__icon" onClick={handleClick}>
        {currentPage === "RecommendedPage" ? <GiAlliedStar /> : <GrStar />}
      </div>
      <div className="footer__icon" onClick={handleClick}>
        {currentPage === "TopTrackPage" ? (
          <HiTrendingUp />
        ) : (
          <IoIosTrendingUp />
        )}
      </div>
      <div className="footer__icon" onClick={handleClick}>
        {currentPage === "" ? <GiDoctorFace /> : <GiHumanTarget />}
      </div>
    </div>
  );
};

export default Footer;
