import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('render header layout', () => {
  it('header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
