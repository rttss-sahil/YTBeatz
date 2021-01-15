import React from "react";

import HomePage from "../HomePage/HomePage";
import RecommendedPage from "../RecommendedPage/RecommendedPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import TopTracksPage from "../TopTracksPage/TopTracksPage";

import Header from "../../Others/Header/Header";
import Footer from "../../Others/Footer/Footer";

const MainPage = () => {
  const [currentPage, setCurrentPage] = React.useState(
      <ProfilePage key="ProfilePage" />
    ),
    pages = (page) => {
      switch (page) {
        case "HomePage":
          return <HomePage key="HomePage" />;
        case "RecommendedPage":
          return <RecommendedPage key="RecommendedPage" />;
        case "TopTracksPage":
          return <TopTracksPage key="TopTracksPage" />;
        default:
          return <ProfilePage key="ProfilePage" />;
      }
    },
    handlePageChange = (page) => {
      setCurrentPage(pages(page));
    };
  return (
    <>
      {/* Header */}
      <Header currentPage={currentPage.key} />
      {currentPage}
      {/* Footer */}
      <Footer
        currentPage={currentPage.key}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MainPage;
