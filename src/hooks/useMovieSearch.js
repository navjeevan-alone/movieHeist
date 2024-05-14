// useMovieSearch.js

import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { ACTIONS, useMovieContext } from '../context/MovieContext';

const API_KEY = 'cc31d08b0d4b5b3539a406e5af2aec1f';
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
            console.log("from hook ", response.data.results)
            return response.data.results;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            return [];
        }
    }, [endpointSlug]);


    useEffect(() => {
        const fetchData = async () => {
            if (endpointSlug === endpoints.genres) {
                const genre = await fetchMovies();
                dispatch({ type: ACTIONS.SET_GENRE, payload: genre });
                console.log(genre);
            }
            else {
                if (searchQuery.trim() !== '') {
                    const movies = await fetchMovies(searchQuery.trim());
                    dispatch({ type: ACTIONS.SET_MOVIES, payload: movies });
                } else {
                    dispatch({ type: ACTIONS.SET_MOVIES, payload: [] });
                }

            }

        };
        fetchData();
    }, [searchQuery, dispatch, fetchMovies]);



    return { loading, error, setSearchQuery };

};

export default useMovieSearch;
