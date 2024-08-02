import React from 'react'
import { Form } from 'semantic-ui-react'
import { updateMoviesCount } from './service';
function IncreaseCountButton(props) {

    const onSubmit = async () => {
        const response = await updateMoviesCount(props.movieId);
        if (response) {
          props.onIncrease(response.data, props.movieId);
      }
    };
  return (
    <div>        
        <Form  onSubmit={onSubmit}>
            <button type='submit'>Increase Count</button>
        </Form>
</div>
  )
}

export default IncreaseCountButton