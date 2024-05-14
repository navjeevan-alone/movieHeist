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

export const useGenreFetch = () => {
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
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }, []);

    return { genres, loading, error, fetchGenres };
};

export default useMovieSearch;
