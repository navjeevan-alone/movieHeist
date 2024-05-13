// MovieContext.js

import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  movies: [],
  loading: false,
  error: null,
};

// Actions
const SET_MOVIES = "SET_MOVIES";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

// Reducer function
const movieReducer = (state, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Create context
const MovieContext = createContext();

// Context provider component
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook for using MovieContext
export const useMovieContext = () => useContext(MovieContext);
