// use to get rid of each aritcle
import React, { useContext, useEffect, useReducer } from "react";
// import reducer items

import reducer from "./useReducer";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const defaultState = {
  loading: true,
  hits: [],
  query: "react",
  page: 0,
  pageNbs: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // useReducer
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, AppContext}
