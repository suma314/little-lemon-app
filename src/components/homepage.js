import React from "react";
import { useNavigate } from 'react-router-dom';
import Specials from "./specials";
import Chicago from "./chicago";
import CustomersSay from "./customersSay";
import CallToAction from "./CallToAction";
import About from "./About/About";

function Homepage() {

   const navigate = useNavigate();

   const navigateToBookingPage = () => {
      navigate('/booking');
   };

   return (
      <>
         <Chicago></Chicago>
         <CallToAction> </CallToAction>
         <Specials></Specials>
         <CustomersSay></CustomersSay>
         <About></About>
      </>
   )
}

export default Homepage;
