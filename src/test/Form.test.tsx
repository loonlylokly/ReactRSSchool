import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddCard from '../pages/AddCard';

describe('render addcard layout', () => {
  it('addcard', () => {
    render(
      <BrowserRouter>
        <AddCard />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox', { name: 'Product Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Product Description' })).toBeInTheDocument();
    expect(
      screen.getByLabelText('Date of product appearance', { selector: 'input' })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Choose a type:', { selector: 'select' })).toBeInTheDocument();
    expect(screen.getByLabelText('Available', { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText('Not available', { selector: 'input' })).toBeInTheDocument();
    // expect(
    // screen.getByLabelText('Choose a profile picture:', { selector: 'input' })
    // ).toBeInTheDocument();
    expect(
      screen.getByLabelText('There is a special offer for the product', { selector: 'input' })
    ).toBeInTheDocument();
  });
});
