import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddCard from '../pages/AddCard';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('render addcard layout', () => {
  it('addcard', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCard />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('textbox', { name: 'Character Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Character Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Character Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Character Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Character Name' })).toBeInTheDocument();
    expect(screen.getByLabelText('Choose a status:', { selector: 'select' })).toBeInTheDocument();
    expect(screen.getByLabelText('Male', { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText('Female', { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText('Genderless', { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText('unknown', { selector: 'input' })).toBeInTheDocument();
    expect(
      screen.getByLabelText('Choose a character picture:', { selector: 'input' })
    ).toBeInTheDocument();
  });
});
