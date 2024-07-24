import React, { useEffect, useState } from 'react';
import { Header, Message, Table, Button } from 'semantic-ui-react';
import { getMovies, deleteMovie } from './service';
import MovieForm from './MovieForm';
import IncreaseCountButton from './IncreaseCountButton';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {useNavigate} from 'react-router-dom';


const MovieList = () => {
    const navigate = useNavigate(); 
    const userInfo = localStorage.getItem("userinfo");
    const navigateToLogin = () => {
     if(!userInfo){
       navigate('/');
     }
     
    };
    const [movies, setMovies] = useState([]);
    const [deleteMsg, setDeleteMsg] = useState('');
    useEffect(() => {
      navigateToLogin();
      fetchMovies();
    }, []);
  
    const fetchMovies = async () => {
        const response = await getMovies();
        setMovies(response.data);
        setDeleteMsg('')
    };
  
    const handleDelete = async (id) => {
        const response = await deleteMovie(id);
        setDeleteMsg(response.data[0].message)
        fetchMovies();
    };

    const handleOnClick = async (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => handleDelete(id)
              },
              {
                label: 'No',
                onClick: () =>  fetchMovies()
              }
            ]
          });
      }
    const onIncrease = async (data) =>{
        if(data){
            setMovies(data);
        }
        setDeleteMsg('')
    }
    const onAddition = async (data) =>{
        if(data){
            setMovies(data);
        }
        setDeleteMsg('')
    }
    return (
      <div className="App">
        <header className="App-header">
        <Header as="h1">My Movies</Header>
              {movies &&
                  <div>
                { 
                deleteMsg &&
                    <Message
                        error
                        content={deleteMsg}
                    />
                    }
                      <table>
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Title</th>
                                  <th>Movie Count</th>
                                  <th>Actions</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                          {movies.map(movie => (
  
                                      <tr id={movie.id} key={movie.id}>
                                          <td>{movie.id}</td>
                                          <td>{movie.title}</td>
                                          <td>{movie.count}</td>
                                          <td>
                                            <IncreaseCountButton onIncrease={onIncrease} movieId={movie.id} /> 
                                          </td>
                                          <td>
                                             <Button onClick={() => handleOnClick(movie.id)}>Delete</Button>  
                                          </td>
                                      </tr>
                          ))}
                          </tbody>
                      </table>
                      <MovieForm onAddition={onAddition} />
                  </div>
              }
  
        </header>
      </div>
    );
}

export default MovieList