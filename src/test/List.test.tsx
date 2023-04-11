import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from '../components/List';
import Card from '../components/Card/Card';
import { Character } from '../types/Character';

const cards: Character[] = [
  {
    id: 1,
    name: 'Test1',
    status: 'Alive',
    species: 'Test 1',
    type: 'Test',
    gender: 'Genderless',
    image: 'test1.png',
  },
  {
    id: 2,
    name: 'Test2',
    status: 'Dead',
    species: 'Test 2',
    type: 'Test',
    gender: 'unknown',
    image: 'test2.png',
  },
];

describe('render cards', () => {
  it('cards list', () => {
    render(
      <List
        classNameList="test"
        items={cards}
        renderItem={(card: Character) => <Card key={card.id} card={card} onClick={() => {}} />}
      />
    );
    expect(screen.getAllByRole('img').length).toBe(cards.length);
  });
});
