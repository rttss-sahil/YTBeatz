import React from "react";

import { IoIosTrendingUp } from "react-icons/io";
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { GiAlliedStar, GiDoctorFace, GiHumanTarget } from "react-icons/gi";
import { GrStar } from "react-icons/gr";
import { HiTrendingUp } from "react-icons/hi";

import "./Footer.css";

const Footer = ({ currentPage, handlePageChange }) => {
  return (
    <div className="footer flex__row">
      <div className="footer__icon" onClick={(e) => handlePageChange(1)}>
        {currentPage === "HomePage" ? <IoHome /> : <IoHomeOutline />}
      </div>
      <div className="footer__icon" onClick={(e) => handlePageChange(2)}>
        {currentPage === "RecommendedPage" ? <GiAlliedStar /> : <GrStar />}
      </div>
      <div className="footer__icon" onClick={(e) => handlePageChange(3)}>
        {currentPage === "TopTracksPage" ? (
          <HiTrendingUp />
        ) : (
          <IoIosTrendingUp />
        )}
      </div>
      <div className="footer__icon" onClick={(e) => handlePageChange(4)}>
        {currentPage === "ProfilePage" ? <GiDoctorFace /> : <GiHumanTarget />}
      </div>
    </div>
  );
};

export default Footer;
