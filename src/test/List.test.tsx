import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from '../components/List';
import { ICard } from 'types/ICard';

const cards: ICard[] = [
  {
    id: '3',
    title: 'Test1',
    price: '123$',
    description: 'test description1',
    category: 'newTest',
    image: 'test3.png',
  },
  {
    id: '4',
    title: 'Test2',
    price: '123$',
    description: 'test description2',
    category: 'newTest',
    image: 'test4.png',
  },
];

describe('render cards', () => {
  it('cards list', () => {
    render(<List items={cards} classNameList={'test__list'} />);
    expect(screen.getAllByRole('img').length).toBe(cards.length);
  });
});
