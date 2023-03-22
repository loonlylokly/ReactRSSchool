import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { ICard } from 'types/ICard';

const card: ICard = {
  id: '2',
  title: 'Test',
  price: '123$',
  description: 'meow meow meow',
  category: 'newTest',
  image: 'test.png',
};

describe('<Card>', () => {
  it('render card', () => {
    render(<Card card={card} />);
    expect(screen.getByText(card.description)).toBeInTheDocument();
    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
