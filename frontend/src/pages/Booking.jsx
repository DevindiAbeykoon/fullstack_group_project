import React from 'react'
import './Booking.css'
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';

const Booking = () => {


  return (

    //Add nav bar 
    <div className='container'>
        <div className='header'>
            <div className='text'>Presidential Suite-1</div>
            <div className='underline'></div>
            <div className='text1'>Fill the details to Book Your Room</div>
            
        </div>

        <div className='inputs'>
            <tr className='space'>
                <td className='space'>
                    <div className='input'>
                        <img src={user_icon} alt='' />
                        <div>
                            <input type='text' placeholder='First Name' />
                        </div>
                    </div>
                </td>

                <td className='space'>
                    <div>
                        <div className='input'>
                            <img src={user_icon} alt='' />
                            <input type='text' placeholder='Last Name' />
                        </div>
                    </div>
                
                </td>
            </tr>

            <div className='input'>
                <img src={email_icon} alt='' />
                <input type='email' placeholder='E-mail' />
            </div>
            
            <tr className='space'>
                <td className='space'>
                    <div className='input'>
                         <img src="" alt='' />  {/*can add images  */}
                        <div>
                            <input type='Check-in Date' placeholder='Check-in Date' /> 
                        </div>
                    </div>
                </td>

                <td className='space'> 
                    <div className='input'>
                        <img src="" alt='' /> {/*can add images  */}
                        <div>
                            <input type='Check-in Time' placeholder='Check-in Time' />
                        </div>
                    </div>
                
                </td>
            </tr>
           
            <tr className='space'>
                <td className='space'>
                    <div className='input'>
                        <img src="" alt='' /> {/*can add images  */}
                        <div>
                            <input type='Check-out Date' placeholder='Check-out Date' /> 
                       </div>
                    </div>
    
                </td>

                <td className='space'> 
                    <div className='input'>
                        <img src="" alt='' />  {/*can add images  */}
                        <div>
                            <input type='Check-out Time' placeholder='Check-out Time' /> 
                        </div>
                    </div>
                
                </td>
            </tr>         
            
        </div>
        

        <div className='submit-container'>
            <div className="clear"> Back</div>
            <div className="submit">Booking Now</div>
        </div>
      
    </div>
  )
}

export default Booking
