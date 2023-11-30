import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "src/components/bookingform";



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Reserve Table");
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
})