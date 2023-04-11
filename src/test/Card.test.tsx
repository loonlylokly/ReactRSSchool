import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { Character } from '../types/Character';

const card: Character = {
  id: 1,
  name: 'Test1',
  status: 'Alive',
  species: 'Test 1',
  type: 'Test',
  gender: 'Genderless',
  image: 'test.png',
};

describe('<Card>', () => {
  it('render card', () => {
    render(<Card card={card} onClick={() => {}} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
