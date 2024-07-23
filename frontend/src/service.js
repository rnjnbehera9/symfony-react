import axios from 'axios';

const API_URL = 'http://localhost:8000/movies';

const getMovies = () => axios.get(API_URL);
const createMovies = (data) => axios.post(API_URL, data);
const updateMoviesCount = (id) => axios.put(`${API_URL}/${id}/count`);
const deleteMovie = (id) => axios.delete(`${API_URL}/${id}`);

export { getMovies, createMovies, updateMoviesCount, deleteMovie};
