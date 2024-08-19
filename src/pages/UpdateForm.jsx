// import React, { useState } from 'react'
// import PhoneInput from 'react-phone-number-input'
// import bgimage from "../images/bgImg.jpg"
// import "./Form.css"
// import { useLocation, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { FaFileImage, FaFilePdf, FaFileWord } from 'react-icons/fa';
// import {  allUser } from './redux/action'
// import Tags from './Tags'

// const UpdateForm = () => {
//     const location = useLocation();
//     const { fname, lname, mname, ph, email, image, country, pdf, doc,bio } = location.state || {};
//     const [selectedImage, setSelectedImage] = useState(image || null);
//     const [value, setValue] = useState(ph || '');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setSelectedImage(reader.result); // Save base64 string of the image
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const logging = (e) => {
//         e.preventDefault();

//         const formData = {
//             firstName: e.target.firstName.value,
//             middleName: e.target.middleName.value,
//             lastName: e.target.lastName.value,
//             phoneNumber: value, // Use the value from PhoneInput
//             email: e.target.email.value,
//             country: e.target.country.value,
//             image: selectedImage, // Save the base64 string of the image
//             pdf:  e.target.pdf.value||pdf,
//             doc: e.target.doc.value ||doc,
//             bio:e.target.bio.value ,
//         };
        
//         dispatch(allUser(formData));
//         navigate("/thankyou", { state: formData });
     
//     };

//     const addskills=(e)=>{
//         e.preventDefault()
//         console.log(e.target);
        

//     }
//     const text=(e)=>{
//         e.preventDefault()
//         console.log(e.target.value);
        

//     }
//     return (
//         <>
//             <div className='mainDiv'>
//                 <div className="test">
//                     <img src={bgimage} alt="Background" />
//                 </div>

//                 <div className='formDiv scrollbar' id="style-1">
//                     <form onSubmit={logging}>
//                         <input name="firstName" type="text" defaultValue={fname} maxLength="15" />
//                         <input name="middleName" type="text" defaultValue={mname} maxLength="15" />
//                         <input name="lastName" type="text" defaultValue={lname} maxLength="15" />
//                         <input name="email" type="text" defaultValue={email} maxLength="15" />
//                         <input name="country" type="text" defaultValue={country} placeholder='country' maxLength="15" />

//                         <PhoneInput
//                             name="phone"
//                             value={value}
//                             onChange={setValue}
//                             maxLength="15"
//                         />

//                         <textarea name="bio" id="" placeholder="bio likkho " defaultValue={bio} maxLength={100}></textarea>

//                         <h6>upload documents</h6>
//                         <div className='d-flex justify-content-start gap-3 mt-3' style={{ width: "100%" }}>
//                             {/* Image Upload */}
//                             <label htmlFor="imageUpload" className="file-upload-icon">
//                                 <FaFileImage color="white" size={30} /> {/* Image Icon */}
//                             </label>
//                             <input id="imageUpload" name="image" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />

//                             {/* PDF Upload */}
//                             <label htmlFor="pdfUpload" className="file-upload-icon">
//                                 <FaFilePdf color="red" size={30} /> {/* PDF Icon */}
//                             </label>
//                             <input id="pdfUpload" name="pdf" type="file" accept=".pdf" style={{ display: 'none' }} />

//                             {/* DOC Upload */}
//                             <label htmlFor="docUpload" className="file-upload-icon">
//                                 <FaFileWord color="blue" size={30} /> {/* DOC Icon */}
//                             </label>
//                             <input id="docUpload" name="doc" type="file" accept=".doc,.docx" style={{ display: 'none' }} />
//                         </div>


// <input type="text" onChange={(e)=>{text(e)}} />
// <button >add skills</button>

//                         <button type="submit" className='button-17'>update</button>
//                     </form>    

                    
                                  
//                 </div>
//             </div>
//         </>
//     );
// }

// export default UpdateForm;
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import bgimage from "../images/bgImg.jpg";
import "./Form.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaFileImage, FaFilePdf, FaFileWord } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { allUser } from './redux/action';

const UpdateForm = () => {
    const location = useLocation();
    const { fname, lname, mname, ph, email, image, country, pdf, doc, bio, skills: initialSkills = [] } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(image || null);
    const [value, setValue] = useState(ph || '');
    const [skills, setSkills] = useState(initialSkills); // State for skills
    const [newSkill, setNewSkill] = useState(''); // State for the new skill input
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result); // Save base64 string of the image
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim()) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const logging = (e) => {
        e.preventDefault();

        const formData = {
            firstName: e.target.firstName.value,
            middleName: e.target.middleName.value,
            lastName: e.target.lastName.value,
            phoneNumber: value,
            email: e.target.email.value,
            country: e.target.country.value,
            image: selectedImage,
            pdf: e.target.pdf.value || pdf,
            doc: e.target.doc.value || doc,
            bio: e.target.bio.value,
            skills, // Include the skills array in the formData
        };
        
        dispatch(allUser(formData));
        navigate("/thankyou", { state: formData });
    };

    return (
        <>
            <div className='mainDiv'>
                <div className="test">
                    <img src={bgimage} alt="Background" />
                </div>

                <div className='formDiv scrollbar' id="style-1">
                    <form onSubmit={logging}>
                        <input name="firstName" type="text" defaultValue={fname} maxLength="15" />
                        <input name="middleName" type="text" defaultValue={mname} maxLength="15" />
                        <input name="lastName" type="text" defaultValue={lname} maxLength="15" />
                        <input name="email" type="text" defaultValue={email} maxLength="15" />
                        <input name="country" type="text" defaultValue={country} placeholder='country' maxLength="15" />

                        <PhoneInput
                            name="phone"
                            value={value}
                            onChange={setValue}
                            maxLength="15"
                        />

                        <textarea name="bio" placeholder="Bio" defaultValue={bio} maxLength={100}></textarea>

                        <h6>Upload Documents</h6>
                        <div className='d-flex justify-content-start gap-3 mt-3' style={{ width: "100%" }}>
                            {/* Image Upload */}
                            <label htmlFor="imageUpload" className="file-upload-icon">
                                <FaFileImage color="white" size={30} />
                            </label>
                            <input id="imageUpload" name="image" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />

                            {/* PDF Upload */}
                            <label htmlFor="pdfUpload" className="file-upload-icon">
                                <FaFilePdf color="red" size={30} />
                            </label>
                            <input id="pdfUpload" name="pdf" type="file" accept=".pdf" style={{ display: 'none' }} />

                            {/* DOC Upload */}
                            <label htmlFor="docUpload" className="file-upload-icon">
                                <FaFileWord color="blue" size={30} />
                            </label>
                            <input id="docUpload" name="doc" type="file" accept=".doc,.docx" style={{ display: 'none' }} />
                        </div>

                        {/* Skills Section */}
                        <div className='skills-section'>
                            <h6>Skills</h6>
                            <div className='skills-list'>
                                {skills.map((skill, index) => (
                                    <div key={index} className='skill-item'>
                                        <span>{skill}</span>
                                        <MdDelete  onClick={() => handleRemoveSkill(skill)}/>
                                      
                                    </div>
                                ))}
                            </div>
                            <input
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="Add a skill"
                            />
                            <button onClick={handleAddSkill}>+ Add Skill</button>
                        </div>

                        <button type="submit" className='button-17'>Update</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateForm;
