import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders MovieList component when navigating to /', () => {
  render(
    <BrowserRouter>
      <App initialEntries={['/']}/>
    </BrowserRouter>
  );

  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});
it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <App/>
      </BrowserRouter>

  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

