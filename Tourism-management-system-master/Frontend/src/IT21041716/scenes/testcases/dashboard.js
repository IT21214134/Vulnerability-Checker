import { render, screen, cleanup } from '@testing-library/react';
import Dashboard from '../Cpanel/dashboard'

afterEach(() => {
  cleanup();
});

test('should render login component', () => {
  render(<Dashboard />);
  const loginElement = screen.getByTestId('dashboard-id-1');
  expect(loginElement).toBeInTheDocument();
});