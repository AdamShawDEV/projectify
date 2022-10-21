import React, { createContext, useContext, useState } from "react";

const PageTitle = createContext();

function usePageTitle() {
  return useContext(PageTitle);
}

function PageTitleProvider({ children }) {
  const [pageTitle, setPageTitle] = useState("No Title");

  return (
    <PageTitle.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitle.Provider>
  );
}

export { usePageTitle, PageTitleProvider };
