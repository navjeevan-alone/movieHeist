// useMovieSearch.js

import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useMovieContext } from '../context/MovieContext';

const API_KEY = 'cc31d08b0d4b5b3539a406e5af2aec1f';
const BASE_URL = 'https://api.themoviedb.org/3';

const endpoints = {
    top_rated: '/movie/top_rated',
    search: '/search/movie'
};
const useMovieSearch = (endpointSlug) => {
    const { dispatch } = useMovieContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1); // Initialize page to 1



    const fetchMovies = useCallback(async (query, pageNum) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`${BASE_URL}${endpoints[endpointSlug]}`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                    page: pageNum,
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
            if (searchQuery.trim() !== '') {
                const movies = await fetchMovies(searchQuery.trim());
                dispatch({ type: 'SET_MOVIES', payload: movies });
            } else {
                dispatch({ type: 'SET_MOVIES', payload: [] });
            }
        };

        fetchData();
    }, [searchQuery, page, dispatch, fetchMovies]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return { loading, error, setSearchQuery, handleNextPage, handlePrevPage };

};

export default useMovieSearch;
