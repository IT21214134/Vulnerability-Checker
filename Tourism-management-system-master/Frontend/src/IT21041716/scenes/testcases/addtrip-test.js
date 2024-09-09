import { render, screen, cleanup } from '@testing-library/react';
import AddTrip from '../Cpanel/Addtrip'

afterEach(() => {
  cleanup();
});

test('should render login component', () => {
  render(<AddTrip />);
  const loginElement = screen.getByTestId('addTrip-id-1');
  expect(loginElement).toBeInTheDocument();
});