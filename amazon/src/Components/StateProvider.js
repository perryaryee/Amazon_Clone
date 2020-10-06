import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
const StateContext = createContext();

// Wraps our App in other to get access to the datalayer in every components of the App
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Information from The Datalayer
const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };
