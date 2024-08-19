import React from 'react'
import "./main.css"
import userimage from "../images/user.png"
import { useNavigate } from 'react-router-dom'
import UpdateForm from './UpdateForm'
import ProgressBar from "@ramonak/react-progress-bar";
import { IoMdEye } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const Cards = ({fname,mname,lname,ph,email,image,country,pdf,doc ,bio,skills}) => {
  const navigate=useNavigate()
  const edit=()=>{
    // <UpdateForm fname={"fname"}/>
    console.log(fname)
    navigate("/update" ,{state:{fname,mname,lname,ph,email,image,country,pdf,doc,bio,skills}});
    
  }
  const view=()=>{
    // <UpdateForm fname={"fname"}/>
    console.log(fname,image)
    navigate("/view" ,{state:{fname,mname,lname,ph,email,image,country,pdf,doc,bio,skills}});
    
  }
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

            <ProgressBar completed={80} bgColor={"#99FF66"} />
            </div>

            <div className='d-flex justify-content-around' style={{width:"100%"}}>
            <IoMdEye size={30} onClick={()=>{view()}}/>
            <FaRegEdit size={30} onClick={()=>{edit()}}/>
            </div>
        </div>
       
 
  )
}

export default Cards