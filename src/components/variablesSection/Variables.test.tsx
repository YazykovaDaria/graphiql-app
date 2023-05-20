import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithProviders from 'src/tests/utils/reduxForTest';

import { Variables } from './Variables';

describe('Variables component', () => {
  it('should render', () => {
    renderWithProviders(<Variables />);
    expect(screen.getByTestId('variables')).toBeInTheDocument();
  });
});
