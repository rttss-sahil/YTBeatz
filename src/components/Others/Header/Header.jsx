import React from "react";

import MainHeader from "./MainHeader/MainHeader";
import SearchingHeader from "./SearchingHeader/SearchingHeader";

const Header = ({ currentPage }) => {
  const handleHeaderChanger = (header) => {
    switch (header) {
      case "SearchingHeader":
        setCurrentHeader(<SearchingHeader currentPage={currentPage} />);
        break;
      default:
        setCurrentHeader(<MainHeader currentPage={currentPage} />);
    }
    setCurrentHeader(header);
  }; // eslint-disable-next-line
  const [currentHeader, setCurrentHeader] = React.useState(
    <MainHeader
      currentPage={currentPage}
      handleHeaderChanger={handleHeaderChanger}
    />
  );

  return (
    <>
      {/* {currentHeader} */}
      <MainHeader currentPage={currentPage} changePage={handleHeaderChanger} />
    </>
  );
};

export default Header;
