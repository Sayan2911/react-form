import React from 'react'
import "./main.css"
import image from "../images/user.png"
const Cards = ({fname,mname,lname,ph}) => {
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

        </div>
       
 
  )
}

export default Cards