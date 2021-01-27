import React from "react";

import MainFooter from "../../Others/Footer/MainFooter";
import ProfilePage from "../ProfilePage/ProfilePage";
import MainHeader from "../../Others/Header/MainHeader/MainHeader";

const MainPage = () => {
  const [currentPage, setCurrentPage] = React.useState(ProfilePage),
    handlePageChange = (page) => {
      setCurrentPage(page);
    };
  return (
    <>
      <MainHeader currentPage={currentPage.key} />
      {currentPage}
      <MainFooter
        currentPage={currentPage.key}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MainPage;
