import React from 'react'
import './ProfileCard.scss'


export default function ProfileCard({profile}) {
    const {FirstName, LastName, Email, UserName,Gender,LastLogin, CreditCardType,Longitude,Latitude,PhoneNumber, PaymentMethod} = profile

    
    
  const Googlemap = `http://maps.google.com/maps?q=${Latitude},${Longitude}`
    return (
        <div className='profilecard'>
            <div className='profilecard__cover'></div>
           <div className='content'>

           <img src="https://img.icons8.com/windows/48/000000/user-male-circle.png"/>
            <h4>{FirstName} {LastName}</h4>
            <div className='span'><span className='first'>Gender:</span> <span className='second'>{Gender} </span></div> 
            <div className='span'><span>Email:</span> <span>{Email} </span></div>
              <div className='span'><span>Phone:</span> <span>{PhoneNumber} </span></div> 
            <div className='span'><span>Payment Method:</span> <span>{PaymentMethod} </span></div>
            <div className='span'><span>Credit Card:</span> <span>{CreditCardType} </span></div> 
            <div className='span'><span>Last Login:</span> <span>{LastLogin} </span></div> 

           </div>
            
            
        </div>
    )
}
