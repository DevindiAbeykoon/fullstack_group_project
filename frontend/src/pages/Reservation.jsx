import React from 'react'
import './Booking.css'




const Reservation = () => {


  return (
    <div className='container'>
        <div className='header'>
        <div className='submit-container'>
            <div className="current"> Current Reservation</div>
            <div className="pass">Pass Reservation</div>
            
        </div>
        </div>
        <div className='underline1'></div>

            <div className='textP'>Presidential Suite</div>
           
            <div className='text1'>Room Number 99</div>
            <div className='text1'>Check-in : 8.00 am 10/12/2023</div>
            <div className='text1'>Check-in : 12.00 pm 15/12/2023</div>
            
       
      
    </div>
  )
}

export default Reservation
