// Initial state
export const initialState = {
    movies: [],
    genres: [],
    loading: false,
    error: null,
};

// Actions
export const ACTIONS = {
    SET_MOVIES: "SET_MOVIES",
    SET_ERROR: "SET_ERROR",
    SET_LOADING: "SET_LOADING",
    SET_GENRE: "SET_GENRE"
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
        case ACTIONS.SET_GENRE:
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
