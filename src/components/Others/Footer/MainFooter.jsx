import React from "react";

import { IoIosTrendingUp } from "react-icons/io";
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { GiAlliedStar, GiDoctorFace, GiHumanTarget } from "react-icons/gi";
import { GrStar } from "react-icons/gr";
import { HiTrendingUp } from "react-icons/hi";

import HomePage from "../../MainPage/HomePage/HomePage";
import RecommendedPage from "../../MainPage/RecommendedPage/RecommendedPage";
import TopTracksPage from "../../MainPage/TopTracksPage/TopTracksPage";
import ProfilePage from "../../MainPage/ProfilePage/ProfilePage";

import "./MainFooter.scss";

const MainFooter = ({ currentPage, handlePageChange }) => {
  const footerIcon = (
    changePage = ProfilePage,
    Icon1,
    Icon2,
    className = "footer__icon"
  ) => (
    <>
      <div className={className} onClick={() => handlePageChange(changePage)}>
        {currentPage === `${changePage().key}` ? <Icon1 /> : <Icon2 />}
      </div>
    </>
  );
  return (
    <div className="footer flex__row">
      {footerIcon(HomePage, IoHome, IoHomeOutline)}
      {footerIcon(RecommendedPage, GiAlliedStar, GrStar)}
      {footerIcon(TopTracksPage, HiTrendingUp, IoIosTrendingUp)}
      {footerIcon(ProfilePage, GiDoctorFace, GiHumanTarget)}
    </div>
  );
};

export default MainFooter;
