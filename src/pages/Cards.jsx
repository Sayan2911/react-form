import React from 'react'
import "./main.css"
import image from "../images/user.png"
import { useNavigate } from 'react-router-dom'
import UpdateForm from './UpdateForm'
import ProgressBar from "@ramonak/react-progress-bar";
import { IoMdEye } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const Cards = ({fname,mname,lname,ph}) => {
  const navigate=useNavigate()
  const logName=()=>{
    // <UpdateForm fname={"fname"}/>
    console.log(fname)
    navigate("/update" ,{state:{fname,mname,lname,ph}});
    
  }
  return (
   
        <div  className='main-card'>
            <img src={image} alt="user"  style={{width:'5vw',height:"auto" ,borderRadius:"50px"}}/>
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

            <ProgressBar completed={80} bgColor={"#99FF66"} />
            </div>

            <div className='d-flex justify-content-around' style={{width:"100%"}}>
            <IoMdEye size={30}/>
            <FaRegEdit size={30} onClick={()=>{logName()}}/>
            </div>
        </div>
       
 
  )
}

export default Cards