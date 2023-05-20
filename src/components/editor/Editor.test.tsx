import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithProviders from 'src/tests/utils/reduxForTest';

import { Editor } from './Editor';

describe('Editor component', () => {
  it('should render', () => {
    renderWithProviders(<Editor />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  // it('should auto complete closed bracket', () => {
  //   renderWithProviders(<Editor />);
  //   const expectValue = 'Test [';
  //   const input = screen.getByRole('textbox', { name: 'query' });
  //   // console.log(input);

  //   userEvent.type(input, 'Test [');
  //   expect(screen.getByText(expectValue)).toBeInTheDocument();
  // });
});
