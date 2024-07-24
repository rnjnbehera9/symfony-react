import axios from 'axios';

const API_URL_Movies = 'http://localhost:8000/movies';
const API_URL_User = 'http://localhost:8000/users';

const getMovies = () => axios.get(API_URL_Movies);
const createMovies = (data) => axios.post(API_URL_Movies, data);
const updateMoviesCount = (id) => axios.put(`${API_URL_Movies}/${id}/count`);
const deleteMovie = (id) => axios.delete(`${API_URL_Movies}/${id}`);
const getUsers = (data) => axios.post(API_URL_User, data);

export { getMovies, createMovies, updateMoviesCount, deleteMovie, getUsers};
