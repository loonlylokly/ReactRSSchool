import { describe, it, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Homepage from '../pages/Homepage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        info: {
          count: 1,
          pages: 1,
          next: 'https://rickandmortyapi.com/api/character/?page=2',
          prev: null,
        },
        results: [
          {
            id: 1,
            name: 'TEST Rick',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
              name: 'Earth',
              url: 'https://rickandmortyapi.com/api/location/1',
            },
            location: {
              name: 'Earth',
              url: 'https://rickandmortyapi.com/api/location/20',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode: [
              'https://rickandmortyapi.com/api/episode/1',
              'https://rickandmortyapi.com/api/episode/2',
              // ...
            ],
            url: 'https://rickandmortyapi.com/api/character/1',
            created: '2017-11-04T18:48:46.250Z',
          },
        ],
      }),
  })
);

describe('render Homepage', () => {
  it('Homepage', async () => {
    await act(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Homepage />
          </BrowserRouter>
        </Provider>
      )
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    // expect(screen.getByText('TEST Rick')).toBeInTheDocument();
  });
});
