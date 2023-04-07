import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('render footer layout', () => {
  it('footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Footer');
  });
});
