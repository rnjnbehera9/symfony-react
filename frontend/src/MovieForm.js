import React, { useState }  from 'react'
import { Form } from 'semantic-ui-react'
import { createMovies } from './service';


const MovieForm = (props) => {
    
    const [movieTitle, setMovieTitle] = useState([]);

    const onSubmit = async () => {
        const response = await createMovies({
            "title": movieTitle
        });
        props.onAddition(response)
        setMovieTitle([])
    };


  return (
    <div>            
        <Form  onSubmit={onSubmit}>
            <br/>
            <Form.Field >
                <label>Title: </label>
                <input placeholder='enter movie title' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} required/>
            </Form.Field>
            <br/>
            <button type='submit'>Add Movie</button>
        </Form>
    </div>
  )
}

export default MovieForm