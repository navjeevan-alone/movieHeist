import { createContext, useReducer, useContext } from "react";
import { movieReducer, initialState } from "../reducers/movieReducer";

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
