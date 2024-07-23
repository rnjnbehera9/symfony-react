import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders MovieList component when navigating to /', () => {
  render(
      <App initialEntries={['/']}/>
  );

  expect(screen.getByText(/My Movies/i)).toBeInTheDocument();
});
it('renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

