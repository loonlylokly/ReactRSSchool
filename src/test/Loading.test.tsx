import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading/Loading';

describe('<Loading />', () => {
  it('render loading', () => {
    render(<Loading />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Loading...');
  });
});
