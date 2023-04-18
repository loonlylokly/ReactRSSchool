import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search/Search';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('<Search />', () => {
  it('render search', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
