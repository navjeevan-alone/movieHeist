// useMovieSearch.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMovieContext } from './MovieContext';

const useMovieSearch = () => {
    const { dispatch } = useMovieContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = async (query) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'cc31d08b0d4b5b3539a406e5af2aec1f',
                    language: 'en-US',
                    page: 1,
                    // include_adult: false,
                    query: query,
                },
            });

            setLoading(false);
            return response.data.results;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            return [];
        }
    };

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
    }, [searchQuery, dispatch]);

    return { loading, error, setSearchQuery };
};

export default useMovieSearch;
