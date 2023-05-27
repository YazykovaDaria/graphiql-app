import { screen } from '@testing-library/react';
import renderWithProviders from 'src/tests/utils/reduxForTest';

import { Editor } from './Editor';

describe('Editor component', () => {
  it('should render', () => {
    renderWithProviders(<Editor />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
