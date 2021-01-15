import React from "react";

import MainHeader from "./MainHeader/MainHeader";
import SearchingHeader from "./SearchingHeader/SearchingHeader";

const Header = ({ currentPage }) => {
  const [currentHeader, setCurrentHeader] = React.useState(MainHeader);

  return { currentHeader };
};

export default Header;
