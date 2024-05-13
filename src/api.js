import axios from 'axios';
const API_KEY = 'cc31d08b0d4b5b3539a406e5af2aec1f';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: 1,
                query: query,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw new Error('Failed to fetch movies');
    }
};

export { fetchMovies };
