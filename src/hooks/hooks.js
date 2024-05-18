// useMovieSearch.js

import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useMovieContext } from '../context/MovieContext';
import { ACTIONS } from '../reducers/movieReducer';
const API_KEY = "1641174f567e05336d2720d2badabad2";
const BASE_URL = 'https://api.themoviedb.org/3';

export const endpoints = {
    top_rated: '/movie/top_rated',
    search: '/search/movie',
    genres: "/genre/movie/list"
};
const useMovieSearch = (endpointSlug) => {
    const { dispatch } = useMovieContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = useCallback(async (query) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`${BASE_URL}${endpoints[endpointSlug]}`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                    query: query,
                },
            });

            setLoading(false);
            // console.log("from hook ", response.data.results)
            return response.data.results;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            return [];
        }
    }, [endpointSlug]);


    useEffect(() => {
        const fetchData = async () => {


            if (searchQuery.trim() !== '') {
                const movies = await fetchMovies(searchQuery.trim());
                dispatch({ type: ACTIONS.SET_MOVIES, payload: movies });
            } else {
                dispatch({ type: ACTIONS.SET_MOVIES, payload: [] });
            }

        };
        fetchData();
    }, [searchQuery, dispatch, fetchMovies]);



    return { loading, error, setSearchQuery };

};
export default useMovieSearch;

export const useGenreFetch = () => {
    const { dispatch } = useMovieContext();
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchGenres = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`${BASE_URL}${endpoints.genres}`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                },
            });

            setGenres(response.data.genres);
            setLoading(false);
            dispatch({ type: ACTIONS.GET_ALL_GENRE, payload: genres })
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }, []);

    return { genres, loading, error, fetchGenres };
};

export const useFilteredGenre = (initialGenre) => {
    const { dispatch } = useMovieContext();
    const [activeGenre, setActiveGenre] = useState(initialGenre);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            if (activeGenre) {
                try {
                    setLoading(true);
                    setError(null);

                    const response = await axios.get(`${BASE_URL}/discover/movie`, {
                        params: {
                            api_key: API_KEY,
                            with_genres: activeGenre.id,
                        },
                    });

                    setFilteredMovies(response.data.results);
                    setLoading(false);
                    filteredMovies.length !== 0 && dispatch({ type: ACTIONS.SET_MOVIES, payload: filteredMovies })

                    console.log(activeGenre.name, "genre movies", filteredMovies);
                } catch (error) {
                    setLoading(false);
                    setError(error.message);
                }
            } else {
                setFilteredMovies([]);
            }
        };

        fetchMoviesByGenre();
    }, [activeGenre]);

    const handleGenreChange = (genre) => {
        setActiveGenre(genre);
        console.log(genre)
    };

    return { activeGenre, filteredMovies, loading, error, handleGenreChange };
};
export const useTrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
                    params: {
                        api_key: API_KEY,
                    },
                });

                setTrendingMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };

        fetchTrendingMovies();
    }, []);

    return { trendingMovies, loading, error };
};


export const useMovieDetails = (movieId) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/278`, {
                    params: {
                        api_key: API_KEY,
                        language: 'en-US',
                    },
                });
                setMovie(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    return { movie, loading, error };
};
