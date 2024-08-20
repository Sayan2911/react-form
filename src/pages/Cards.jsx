import React, { useEffect, useState } from 'react'
import "./main.css"
import userimage from "../images/user.png"
import { useNavigate } from 'react-router-dom'

import ProgressBar from "@ramonak/react-progress-bar";
import { IoMdEye } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const Cards = ({fname,mname,lname,ph,email,image,country,pdf,doc ,bio,allFiles,skills}) => {
  const navigate=useNavigate()
  const edit=()=>{
    // <UpdateForm fname={"fname"}/>
    console.log(fname)
    navigate("/update" ,{state:{fname,mname,lname,ph,email,image,country,pdf,doc,bio,allFiles,skills}});
    
  }
  const view=()=>{
    // <UpdateForm fname={"fname"}/>
    console.log(fname,image)
    navigate("/view" ,{state:{fname,mname,lname,ph,email,image,country,pdf,doc,bio,allFiles,skills}});
    
  }
  const [bar, setBar] = useState(0);

  useEffect(() => {
    let totalFields = 10; // Total number of fields being checked
    let filledFields = 0;
  
    // Check each field and increment filledFields if the field is filled.
    if (fname) filledFields++;
    if (mname) filledFields++;
    if (lname) filledFields++;
    if (ph) filledFields++; // Assuming `ph` is not a string, just checking if it exists
    if (email) filledFields++;
    if (image) filledFields++; // Assuming `image` might be an object (e.g., File or Blob)
    if (country) filledFields++;
    if (bio) filledFields++;
    if (allFiles && allFiles.length > 0) filledFields++; // Checking for non-empty array
    if (skills && skills.length > 0) filledFields++; // Checking for non-empty array
  
    // Calculate percentage based on filled fields.
    setBar(Math.floor((filledFields / totalFields) * 100));
  }, [fname, mname, lname, ph, email, image, country, pdf, doc, bio, allFiles, skills]);
  
  




  return (
   
        <div  className='main-card'>
            <img src={image||userimage} alt="user"  style={{ width: "12vh", height:"12vh" ,borderRadius:"55px"  }}/>
            <div className='details'>

            {fname}
            <br/>
            {mname}
            <br/> 
            {lname}
            <br/>
            {ph}
            </div>
            <div style={{width:"14vw"}}>

            <ProgressBar completed={bar} bgColor={"#99FF66"} />
            </div>

            <div className='d-flex justify-content-around' style={{width:"100%"}}>
            <IoMdEye size={30} onClick={()=>{view()}}/>
            <FaRegEdit size={30} onClick={()=>{edit()}}/>
            </div>
        </div>
       
 
  )
}

export default Cards