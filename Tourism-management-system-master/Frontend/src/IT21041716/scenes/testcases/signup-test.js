import { render, screen, cleanup } from '@testing-library/react';
import SignUp from '../signup/index'

afterEach(() => {
  cleanup();
});

test('should render login component', () => {
  render(<SignUp />);
  const loginElement = screen.getByTestId('signup-id-1');
  expect(loginElement).toBeInTheDocument();
});