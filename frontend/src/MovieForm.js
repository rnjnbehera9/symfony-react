import React, { useState }  from 'react'
import { Button, Form } from 'semantic-ui-react'
import { createMovies } from './service';


const MovieForm = (props) => {
    
    const [movieTitle, setMovieTitle] = useState([]);

    const onSubmit = async () => {
        const response = await createMovies({
            "title": movieTitle
        });
        props.onAddition(response.data)
        setMovieTitle([])
    };


  return (
    <div>            
        <Form  onSubmit={onSubmit}>
            <Form.Field >
                <label>Title: </label>
                <input placeholder='enter movie title' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} required/>
            </Form.Field>
            <Button type='submit'>Add Movie</Button>
        </Form>
    </div>
  )
}

export default MovieForm