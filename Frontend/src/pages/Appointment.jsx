import React from 'react'
import Hero from "../components/Hero";
import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Your Health Starts Here: Book Your Appointment with ZeeCare Medical Institute!"} 
        imageUrl={"./signin.png"}
      />
      <AppointmentForm />
    </>
  )
}

export default Appointment