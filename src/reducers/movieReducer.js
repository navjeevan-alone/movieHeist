// Initial state
export const initialState = {
    movies: [],
    genres: [],
    activeGenre: "",
    loading: false,
    error: null,
};

// Actions
export const ACTIONS = {
    SET_MOVIES: "SET_MOVIES",
    SET_ERROR: "SET_ERROR",
    SET_LOADING: "SET_LOADING",
    GET_ALL_GENRE: "GET_ALL_GENRE"
};

// Reducer function
export const movieReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null,
            };
        case ACTIONS.GET_ALL_GENRE:
            return {
                ...state,
                genres: action.payload,
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
