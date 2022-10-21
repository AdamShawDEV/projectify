import React from "react";
import { usePageTitle } from "./hooks/pageTitleContext";

function Header() {
  const { pageTitle } = usePageTitle();

  return <header>{pageTitle}</header>;
}

export default Header;
