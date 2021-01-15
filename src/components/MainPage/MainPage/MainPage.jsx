import React from "react";

import HomePage from "../HomePage/HomePage";
import RecommendedPage from "../RecommendedPage/RecommendedPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import TopTracksPage from "../TopTracksPage/TopTracksPage";

import Header from "../../Others/Header/Header";
import Footer from "../../Others/Footer/Footer";

const MainPage = () => {
  const [currentPage, setCurrentPage] = React.useState(ProfilePage),
    pages = (page) => {
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
    handlePageChange = (page) => {
      setCurrentPage(pages(page));
    };
  return (
    <>
      {/* Header */}
      <Header currentPage={currentPage.key} />
      {/* Footer */}
      <Footer
        currentPage={currentPage.key}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MainPage;
