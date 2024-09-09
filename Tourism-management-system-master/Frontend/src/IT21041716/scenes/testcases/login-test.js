import { render, screen, cleanup } from '@testing-library/react';
import SignIn from '../signin/index';

afterEach(() => {
  cleanup();
});

test('should render login component', () => {
  render(<SignIn />);
  const loginElement = screen.getByTestId('login-id-1');
  expect(loginElement).toBeInTheDocument();
});