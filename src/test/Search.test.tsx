import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search/Search';

describe('<Search />', () => {
  it('render search', () => {
    render(<Search submitMethod={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
