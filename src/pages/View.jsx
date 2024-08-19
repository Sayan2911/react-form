
import React, { useState } from 'react';
import bgimage from '../images/bgImg.jpg';
import './view.css';
import { FaFileImage, FaFilePdf, FaFileWord } from 'react-icons/fa';
import userImage from "../images/user.png";
import { useLocation, useNavigate } from 'react-router-dom';
const View = () => {
  const location = useLocation();
  const { fname, lname, mname, email, ph, image, country,bio, pdf, doc,skills } = location.state || {};
  const [value, setValue] = useState(ph || '');
  const navigate = useNavigate();
  return (
    <>
      <div className='mainDiv'>
        <div className="test">
          <img src={bgimage} alt="Background" />
        </div>

        <div className='formDiv scrollbar' id="style-1">
    <div className='total-form'>
        <div className='d-flex justify-content-around gap-2' style={{width:"25vw"}}>

                <div className='center' style={{height:"10vh" ,width:"1vw"}}>

                            <img src={image||userImage} alt='Uploaded' style={{ width: "20vh", height:"20vh" ,borderRadius:"15px"  }}/>
                </div>
                <div  className='d-flex justify-content-center align-items-start flex-column'>

                        <h3> {fname} {mname}</h3>
                        <h3> {lname}  </h3>
                        <i className='city'> {country||"city:unknown"} </i>
                </div>
        </div>
        <button onClick={()=>{  navigate("/update" ,{state:{fname,mname,lname,ph,email,image,country,pdf,doc,bio,skills}});}}>Edit Your Profile ✎ </button>

        <label htmlFor="">bio</label>
           <div className='bio'>  {bio||"bio..."} </div>
        <label htmlFor="">email</label>
           <h4> {email} </h4>
        <label htmlFor="">phone number</label>
           <h4> {value} </h4>
        <label htmlFor="">documents</label>
        <div className='doc-div'>

                               
                         
          { <FaFileImage color="black" size={30}  />||"no pdf"} <br />
            { <FaFilePdf color="red" size={30} />||"no doc"}
        </div>
          <label>skills</label>

          <div className='skill-div'>
  {(skills?.length > 0) ? (
    skills.map((skill, index) => (
      <div key={index} className='skill-item'>
        <span>{skill}</span>
      </div>
    ))
  ) : (
    <div className='no-skills-message'>
      <span>No skills added yet</span>
    </div>
  )}
</div>``
    </div>
          


        
        
        </div>
      </div>
    </>
  );
};

export default View;
