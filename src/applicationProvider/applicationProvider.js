import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export default function ApplicationProvider({ children }) {
  const [pageId, setPageId] = useState('')
  const value = {pageId, setPageId};

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
