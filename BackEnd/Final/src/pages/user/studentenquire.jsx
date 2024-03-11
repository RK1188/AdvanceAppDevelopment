import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/css/studentqueries.css';
import { saveEnquiry } from '../../services/auth';
import { toast } from 'react-toastify';
const StudentEnquire = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    message: '',
    email: '',  
    enquiryType: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { courseName, message, email, enquiryType } = formData; // Destructure values from formData
  
    const data = {
      courseName: courseName,
      message: message,
      email: email,
      enquiryType: enquiryType,
    };
  
    await saveEnquiry(data)
      .then(() => {
        console.log("success");
        toast.success("Enquiry saved successfully");
        // nav("/routeTo/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  


  return (
    <div className='student-enquire-1'>
    <div className="student-enquire-container">
    <h2 className="student-enquire-heading">Add Enquiry</h2>
    <form onSubmit={handleSubmit} className="student-enquire-form">
    <div>
    <label htmlFor="courseName">Course Name:</label>
    <input
    type="text"
    id="courseName"
    name="courseName"
    value={formData.courseName}
    onChange={handleInputChange}
    className="student-enquire-input"
    />
    </div>
    <div>
    <label htmlFor="message">Enquiry Description:</label>
    <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    className="student-enquire-input"
    ></textarea>
    </div>
    <div>
    <label htmlFor="email">Student Email:</label>
    <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className="student-enquire-input"
    />
    </div>
    <div>
    <label htmlFor="enquiryType">Enquiry Type:</label>
    <select
    id="enquiryType"
    name="enquiryType"
    value={formData.enquiryType}
    onChange={handleInputChange}
    className="student-enquire-input"
    >
    <option value="">Select Enquiry Type</option>
    <option value="Course Details">Course Details</option>
    <option value="Fees">Fees</option>
    <option value="Other">Other</option>
    </select>
    </div>
    <div>
    <button type="submit" className="student-enquire-button">
    Submit Enquiry
    </button>
    </div>
    </form>
    </div>
    </div>
    );
};

export default StudentEnquire;
