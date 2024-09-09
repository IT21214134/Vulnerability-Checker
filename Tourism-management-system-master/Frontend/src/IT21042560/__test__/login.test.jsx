// import { render, screen } from '@testing-library/react';
// import Header from './Header';

// describe('Header component', () => {
//     it('renders the logo', () => {
//       render(<Header />);
//       const logo = screen.getByAltText('Ceylon Travel logo');
//       expect(logo).toBeInTheDocument();
//     });
  
//     it('renders the navigation links', () => {
//       render(<Header />);
//       const homeLink = screen.getByText('Home');
//       expect(homeLink).toBeInTheDocument();
//       const statusLink = screen.getByText('Status');
//       expect(statusLink).toBeInTheDocument();
//       const viewProfilesLink = screen.getByText('View Profiles');
//       expect(viewProfilesLink).toBeInTheDocument();
//       const myProfileLink = screen.getByText('My Profile');
//       expect(myProfileLink).toBeInTheDocument();
//     });
  
//     it('toggles the navbar collapse on click', () => {
//       render(<Header />);
//       const toggleButton = screen.getByLabelText('Toggle navigation');
//       const navLinks = screen.getByRole('navigation');
//       expect(navLinks).not.toHaveClass('show');
//       toggleButton.click();
//       expect(navLinks).toHaveClass('show');
//     });
//   });
  