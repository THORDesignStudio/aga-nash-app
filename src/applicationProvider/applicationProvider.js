import React, { createContext, useState, useEffect } from "react";

export const ApplicationContext = createContext();

/**
 * This context acts as the conduit to pass various state variables that we need to determine the risk of the patient
 * We also use it to know what page the user is on so that we can then properly set various conditions.
 *
 * @param {state} pageId - the state variable that holds the pageId
 * @param {state} setPageId - sets the pageId based on the page the user is on
 */

export default function ApplicationProvider({ children }) {
  const [pageId, setPageId] = useState();
  const [fib4, setFib4] = useState();
  const [alt, setAlt] = useState();
  const [age, setAge] = useState();

  const value = {
    pageId,
    setPageId,
    fib4,
    setFib4,
    alt,
    setAlt,
    age,
    setAge,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
