import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from '../components/List';
import { ICard } from 'types/ICard';

const cards: ICard[] = [
  {
    id: '2',
    title: 'Holy Minimalism',
    type: 'Classic',
    availability: 'Available',
    special: 'not special',
    description: 'description_2',
    image: '2.png',
  },
  {
    id: '3',
    title: 'Boiling Baroque',
    type: 'Classic',
    availability: 'Not Available',
    special: 'not special',
    description: 'description_3',
    image: '3.png',
  },
];

describe('render cards', () => {
  it('cards list', () => {
    render(<List items={cards} classNameList={'test__list'} />);
    expect(screen.getAllByRole('img').length).toBe(cards.length);
  });
});
