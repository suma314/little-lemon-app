import React from "react";
import {Route, Routes} from 'react-router-dom';

import Homepage from "./homepage";
import BookingPage from 'components/bookingPage';
import Conform from 'components/confirmpage';
 
function Main(){
    return (
        <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirm" element={<Conform/>}></Route>
        </Routes>
    );
}

export default Main;