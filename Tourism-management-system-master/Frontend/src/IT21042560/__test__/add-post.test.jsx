// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Form from './Form';

// describe('Form component', () => {
//   it('should submit form with valid input values', () => {
//     const onSubmitMock = jest.fn();
//     const { getByLabelText, getByText } = render(<Form onSubmit={onSubmitMock} />);

//     // Fill in form inputs with valid values
//     fireEvent.change(getByLabelText('Post Title'), { target: { value: 'Test Post' } });
//     fireEvent.change(getByLabelText('Post Description'), { target: { value: 'This is a test post description.' } });
//     fireEvent.change(getByLabelText('Date'), { target: { value: '2023-05-07' } });
//     fireEvent.change(getByLabelText('Location'), { target: { value: 'Test Location' } });
//     fireEvent.change(getByLabelText('Remark'), { target: { value: 'Test remark.' } });
//     const file = new File(['test image'], 'test-image.jpg', { type: 'image/jpeg' });
//     fireEvent.change(getByLabelText('Upload'), { target: { files: [file] } });

//     // Submit the form
//     fireEvent.click(getByText('POST'));

//     // Check that onSubmitMock was called with the expected form data
//     expect(onSubmitMock).toHaveBeenCalledWith({
//       postTitle: 'Test Post',
//       postDescription: 'This is a test post description.',
//       postDate: '2023-05-07',
//       postLocation: 'Test Location',
//       postRemark: 'Test remark.',
//       postImage: file,
//     });
//   });

//   it('should show validation error messages for empty required fields', () => {
//     const onSubmitMock = jest.fn();
//     const { getByText, getByTestId } = render(<Form onSubmit={onSubmitMock} />);

//     // Try to submit the form with empty required fields
//     fireEvent.click(getByText('POST'));

//     // Check that validation error messages are displayed for each required field
//     expect(getByTestId('postTitle-error')).toHaveTextContent('Post Title is required.');
//     expect(getByTestId('postDescription-error')).toHaveTextContent('Post Description is required.');
//     expect(getByTestId('postDate-error')).toHaveTextContent('Date is required.');
//     expect(getByTestId('postLocation-error')).toHaveTextContent('Location is required.');
//   });
// });
