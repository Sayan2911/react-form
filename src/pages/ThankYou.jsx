import React from 'react'
import "./Form.css"
import image from "../images/bgImg.jpg"
import add from "../images/add.png"
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import "./main.css"
const ThankYou = () => {
   
    const allUser = useSelector(state => state.data.allUser);
    const navigate=useNavigate()

    console.log(allUser); 
  
    
    
const newForm=()=>{
    navigate("/");
}
// const editForm=()=>{
  
//     navigate("/");
// }
// const showForm=()=>{

//     navigate("/data");
// }
  return (

    <>
    
    <div className='mainDiv'>
      <div className="test">
          <img src={image} alt="" />
          
      </div>
   

      <div className='main-card-cont' id="style-1">
      {allUser.map((user, index) => (
        <Cards
          key={index}
          fname={user.firstName}
          mname={user.middleName}                  
          lname={user.lastName}
          ph={user.phoneNumber}
        />
      ))}
      <img src={add} alt="" style={{width:"50px",height:"50px",position:"relative" ,top:"150px" ,left:"140px"}} onClick={()=>(newForm())}/>
    </div>
            







        
     {/* <Cards fname="sayan",mname="kr",lname="das",ph="1234567890"/> */}
  
    </div>
  
                      
                
     
     
     
     </>
  )
}

export default ThankYou