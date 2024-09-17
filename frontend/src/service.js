const API_URL_Movies = 'http://localhost:8000/movies';
const API_URL_User = 'http://localhost:8000/users';

const getMovies = () => fetch(API_URL_Movies).then(response=>response.json());

const createMovies = (data) => fetch(API_URL_Movies,{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(data),
}).then(response => response.json());
const updateMoviesCount = (id) => fetch(`${API_URL_Movies}/${id}/count`,{
    method:'PUT',
    headers: {
        'Content-Type': 'application/json',
      }
}).then(response => response.json());
const deleteMovie = (id) => fetch(`${API_URL_Movies}/${id}`,{
    method:'DELETE',
    headers: {
        'Content-Type': 'application/json',
      }
}).then(response => response.json());
const getUsers = (data) => fetch(API_URL_User,{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(data),
}).then(response => response.json());

export { getMovies, createMovies, updateMoviesCount, deleteMovie, getUsers};
