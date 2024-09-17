import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MovieList from './MovieList';
import { getMovies } from './service';

jest.mock('./service');

test('renders movies list', async () => {
    getMovies.mockResolvedValue([{ id: 1, title: 'Test Movie', count: 1 }] );

    render(
        <BrowserRouter>
            <MovieList />
        </BrowserRouter>
    );

    await waitFor(() => screen.getByText('Test Movie'));

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
});

it('renders correctly', () => {
    const tree = renderer
      .create(        
      <BrowserRouter>
        <MovieList />
    </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });