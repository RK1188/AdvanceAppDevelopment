import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveCourse } from '../../services/auth';
import '/src/assets/css/courseadd.css';
import { toast } from 'react-toastify';

const CourseAdd = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    duration: "",
    fees: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleImageChange = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send course data to the backend for storing
      await saveCourse(courseData);
      console.log("Course saved successfully:", courseData);
      toast.success("Course saved successfully");
      // Reset form fields
      setCourseData({
        courseName: "",
        duration: "",
        fees: "",
        image: null
      });
    } catch (error) {
      console.error("Error saving course:", error);
      // Display a meaningful error message to the user
      alert("Failed to save course. Please try again later.");
    }
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
              value={courseData.courseName}
              onChange={handleChange}
              className="student-enquire-input"
            />
          </div>
          <div>
            <label htmlFor="duration">Course Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={courseData.duration}
              onChange={handleChange}
              className="student-enquire-input"
            />
          </div>
          <div>
            <label htmlFor="fees">Fees:</label>
            <input
              type="text"
              id="fees"
              name="fees"
              value={courseData.fees}
              onChange={handleChange}
              className="student-enquire-input"
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="student-enquire-input"
            />
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

export default CourseAdd;
