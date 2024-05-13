
import { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  movies: [],
  loading: false,
  error: null,
};

// Actions
export const ACTIONS = {
  SET_MOVIES: "SET_MOVIES",
  SET_ERROR: "SET_ERROR",
  SET_LOADING: "SET_LOADING",
};

// Reducer function
const movieReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case ACTIONS.SET_ERROR:
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
