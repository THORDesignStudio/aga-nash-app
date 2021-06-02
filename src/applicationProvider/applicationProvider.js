import React, { createContext } from "react";

export const ApplicationContext = createContext();

export default function ApplicationProvider({ children }) {
  const value = {};

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
