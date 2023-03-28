import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { ICard } from 'types/ICard';

const card: ICard = {
  id: '2',
  title: 'Holy Minimalism',
  type: 'Classic',
  availability: 'Available',
  special: 'not special',
  description: 'description_2',
  image: '2.png',
};

describe('<Card>', () => {
  it('render card', () => {
    render(<Card card={card} />);
    expect(screen.getByText(card.description)).toBeInTheDocument();
    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
