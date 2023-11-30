import { render, screen } from "@testing-library/react";
import BookingForm from "src/components/bookingform";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();
})
