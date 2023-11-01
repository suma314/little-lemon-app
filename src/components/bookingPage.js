import BookingForm from "./bookingform";
import { useState } from 'react';

function BookingPage() {
    const [availableTimes , setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    return (
        <>
            <div className="hero-background">
                <div className="hero">
                   <h2 style={{ width: "200" }}>Little Lemon</h2>
                   <h3>Chicago</h3>
                </div>
            </div>
            <BookingForm availableTimes={availableTimes} />
        </>
    );
}

export default BookingPage;
