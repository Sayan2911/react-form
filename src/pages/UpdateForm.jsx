import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import image from "../images/bgImg.jpg"
import "./Form.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaFileImage, FaFilePdf, FaFileWord } from 'react-icons/fa';
import {firstName,allUser }from './redux/action'
const UpdateForm = () => {
    const location = useLocation();
    const { fname,lname,mname,ph } = location.state || {};
    const [value, setValue] = useState()
    const navigate=useNavigate()
    const dispatch = useDispatch();
     const logging = (e) => {
            e.preventDefault(); // Prevent form submission (page reload)
            
            const formData = {
                firstName: e.target.firstName.value,
                middleName: e.target.middleName.value,
                lastName: e.target.lastName.value,
                phoneNumber: value, // PhoneInput's value
                email: e.target.email.value,
                image: e.target.image.value,
                country: e.target.country.value,
                pdf: e.target.pdf.value,
                doc: e.target.doc.value,
            };
            dispatch(allUser(formData))
            navigate("/thankyou")
        }
        console.log(fname,mname,lname,ph);
        
  return (
   <>
   <div className='mainDiv'>
    <div className="test">
        <img src={image} alt="" />
    </div>

    <div className='formDiv scrollbar' id="style-1">
    <form onSubmit={(e)=>(logging(e))}>
                     
                        <input name="firstName" type="text" defaultValue={fname}  maxLength = "15" />
                        <input name="middleName" type="text" placeholder={mname}  maxLength = "15" />
                        <input name="lastName" type="text" placeholder={lname}  maxLength = "15"/>
                        <input name="email" type="text" placeholder='email'  maxLength = "15"/>

                        <input name="country" type="text" placeholder='country'  maxLength = "15" />
                        

                        <PhoneInput
                        placeholder={ph}
                        value={value}
                        onChange={setValue}
                        maxLength = "15"/>
                        <textarea name="bio" id="" placeholder='bio...'></textarea>
                        {/* <input name="image" type="file"  accept="image/*" />
                        <input name="pdf" type="file"  />
                        <input name="doc" type="file"  /> */}

                            <h6>upload documents</h6>
<div className='d-flex justify-content-start gap-3 mt-3' style={{width:"100%"}}>
            
            {/* Image Upload */}
            <label htmlFor="imageUpload" className="file-upload-icon">
                <FaFileImage  color="white" size={30}/> {/* Image Icon */}
            </label>
            <input id="imageUpload" name="image" type="file" accept="image/*" style={{ display: 'none' }} />

            {/* PDF Upload */}
            <label htmlFor="pdfUpload" className="file-upload-icon">
                <FaFilePdf color="red" size={30}/> {/* PDF Icon */}
            </label>
            <input id="pdfUpload" name="pdf" type="file" accept=".pdf" style={{ display: 'none' }} />

            {/* DOC Upload */}
            <label htmlFor="docUpload" className="file-upload-icon">
                <FaFileWord color="blue" size={30} /> {/* DOC Icon */}
            </label>
            <input id="docUpload" name="doc" type="file" accept=".doc,.docx" style={{ display: 'none' }} />
        </div>

                    
       
             
                       

                        <button type="submit" className='button-17' >update</button>
                    </form>

    </div>

  </div>

                    
              
   </>
  )
}

export default UpdateForm