import React, { useState } from 'react'
import image from "../images/bgImg.jpg"
import "./Form.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from 'react-router-dom'


import { useDispatch } from 'react-redux';
import {allUser }from './redux/action'
const Form = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
        // `value` will be the parsed phone number in E.164 format.
        // Example: "+12133734253".
        const [value, setValue] = useState()
  
       
        const logging = (e) => {
            e.preventDefault(); // Prevent form submission (page reload)
            
            const formData = {
   
                firstName: e.target.firstName.value,
                middleName: e.target.middleName.value,
                lastName: e.target.lastName.value,
                phoneNumber: value, // PhoneInput's value
                email: e.target.email.value,

            };
            // dispatch(firstName(formData.firstName))
            dispatch(allUser(formData))

            console.table(formData);
            navigate("/thankYou");
        }
  return (
   <>
  
  <div className='mainDiv'>
    <div className="test">
        <img src={image} alt="" />
    </div>

    <div className='formDiv scrollbar' id="style-1">
    <form onSubmit={(e)=>(logging(e))}>
                     
                   
                        <input name="firstName" type="text" placeholder='first name'  maxLength = "15" required/>
                        <input name="middleName" type="text" placeholder='middle name'  maxLength = "15" required />
                        <input name="lastName" type="text" placeholder='last name'  maxLength = "15" required/>
                        <input name="email" type="text" placeholder='email'  maxLength = "15" required/>

                        
                 
                        <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        maxLength = "15"
                        required/>

                    
       
             
                       

                        <button type="submit" className='button-17' >submit</button>
                    </form>

    </div>

  </div>

                    
              
   
   
   
   </>
  )
}

export default Form