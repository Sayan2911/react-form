
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import bgimage from "../images/bgImg.jpg";
import "./Form.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaFileImage, FaFilePdf, FaFileWord } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { allUser } from './redux/action';
import { AiOutlineFileJpg } from "react-icons/ai";
import { FaFile } from "react-icons/fa";
import { TbFileTypeJsx } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbFileTypeDocx } from "react-icons/tb";
import { TbFileTypePng } from "react-icons/tb";



const UpdateForm = () => {
    const location = useLocation();
    const { fname, lname, mname, ph, email, image, country, pdf, doc, bio,allFiles: initialAllfiles = [],skills: initialSkills = [] } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(image || null);
    const [value, setValue] = useState(ph || '');
    const [skills, setSkills] = useState(initialSkills); // State for skills
    const [newSkill, setNewSkill] = useState(''); // State for the new skill input
    const [allFiles, setAllFile] = useState(initialAllfiles); // State for allFile
    const [newAllFile, setNewAllFile] = useState(''); // State for the new allFile input
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


    const handleAddAllFile = (e) => {
        e.preventDefault();
        if (newAllFile.trim()) {
            setAllFile([...allFiles, newAllFile.trim()]);
            setNewAllFile('');
        }
    };

    const handleRemoveAllFile = (allFileToRemove) => {
        setAllFile(allFiles.filter(allFiles => allFiles !== allFileToRemove));
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
            bio: e.target.bio.value,
            allFiles,
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

                        <h6>Upload Profile Image</h6>
                        <div className='d-flex justify-content-start gap-3 mt-3' style={{ width: "100%" }}>
                            {/* Image Upload */}
                            <label htmlFor="imageUpload" className="file-upload-icon">
                                <FaFileImage color="white" size={30} />
                            </label>
                            <input id="imageUpload" name="image" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />

                            {/* PDF Upload */}
                            {/* <label htmlFor="pdfUpload" className="file-upload-icon">
                                <FaFilePdf color="red" size={30} />
                            </label>
                            <input id="pdfUpload" name="pdf" type="file" accept=".pdf" style={{ display: 'none' }} /> */}

                            {/* DOC Upload */}
                            {/* <label htmlFor="docUpload" className="file-upload-icon">
                                <FaFileWord color="blue" size={30} />
                            </label>
                            <input id="docUpload" name="doc" type="file" accept=".doc,.docx" style={{ display: 'none' }} /> */}
                        </div>
                        {/* upload multiple files */}
                        <h6>Upload Other Documents</h6>
                        <div className='allfile-section'>
                            <h6>All File</h6>
                            <div className='allfile-list'>
                                {allFiles.map((allFile, index) => {
        const Icon = allFile.includes("png") ? TbFileTypePng :
                    allFile.includes("jsx") ? TbFileTypeJsx :
                    allFile.includes("pdf") ? FaRegFilePdf :
                    allFile.includes("doc") || allFile.includes("docx") ? TbFileTypeDocx :
                    allFile.includes("jpg") || allFile.includes("jpeg") ? AiOutlineFileJpg :
                    FaFile;

        return (
            <div key={index} className='allfile-item'>
            <Icon size={30} />
            <MdDelete onClick={() => handleRemoveAllFile(allFile)} />
            </div>
        );
        })}
                            </div>
                            <input
                                type="file"
                                value={newAllFile}
                                onChange={(e) => setNewAllFile(e.target.value)}
                                placeholder="Add a skill"
                            />
                            <button onClick={handleAddAllFile}>+ Add file</button>
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
