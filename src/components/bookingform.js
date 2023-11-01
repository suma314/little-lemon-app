import 'App.css';
import Button from './Button/button';
import { useState } from 'react';
import { Card, CardHeader,CardBody } from '@chakra-ui/card';
import { useNavigate } from 'react-router-dom';


function BookingForm(props) {
    const navigate = useNavigate();

    const navigateToConfirmPage = () => {
        navigate('/confirm');
    }
 
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    const onBookingDateChange = (e) => {
        const bookingDate = e.target.value;
        setBookingDate(bookingDate);
        console.log(bookingDate);
    }

    const onBookingTimeChange = (e) => {
        const bookingTime = e.target.value;
        setBookingTime(bookingTime);
        console.log(bookingTime);
    }

    const NoOfGuests = (e) => {
        const guests = e.target.value;
        setGuests(guests);
        console.log(guests);
    }

    const onOccasionChange = (e) => {
        const occasion = e.target.value;
        setOccasion(occasion);
        console.log(occasion);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            bookingDate,
            bookingTime,
            guests,
            occasion,
        };
        const areAllFieldsFilled = Object.values(formValues).every(
          (value) => value
        );
        return true;
    };

    return (
      <>
         <div style={{margin: "10px", display: "grid", placeItems: "center"}} >
            <Card variant="filled">
            <CardHeader> 
                <h2 style={{fontSize: "larger", marginLeft: "120px", marginRight: "120px", marginTop: "40px", fontWeight:"inherit"}}>
                    Book a Table 
                </h2>
            </CardHeader>
            <CardBody>
                <form 
                onSubmit={(e) => handleFormSubmit(e)}
                style={{ display: "grid",
                    maxWidth: "200px" ,
                    gap: "20px"}}>
                    <label htmlFor="res-date">Choose date</label>
                    <input aria-label='Date' type="date" id="res-date" value={bookingDate} onChange={onBookingDateChange}/>
                    <label htmlFor="res-time">Choose time</label>
                    <select aria-label="Time" id="res-time " value={bookingTime} onChange={onBookingTimeChange}>
                        {props.availableTimes.map((time) => <option>{time}</option> )}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input aria-label="Guests" type="number" value={guests} placeholder="1" min="1" max="10" id="guests" onChange={NoOfGuests} />
                    <label htmlFor="occasion">Occasion</label>
                    <select aria-label="occasion" id="occasion" value={occasion} onChange={onOccasionChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <Button  onClick={navigateToConfirmPage}>Reserve Table</Button>
                </form >
            </CardBody>
        </Card>
        </div>
      </>
    )
}

export default BookingForm;