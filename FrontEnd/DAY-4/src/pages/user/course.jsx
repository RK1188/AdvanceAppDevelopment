import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseData from "./courseData.json";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "/src/assets/css/courseList.css";

const Course = () => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleBookmarkClick = (courseId, courseName) => {
    if (bookmarkedCourses.includes(courseId)) {
      setBookmarkedCourses(bookmarkedCourses.filter((id) => id !== courseId));
      toast.info(`Removed ${courseName} from bookmarks`);
    } else {
      setBookmarkedCourses([...bookmarkedCourses, courseId]);
      toast.success(`Bookmarked ${courseName}`);
    }
  };

  const handleEnrollClick = (courseId, courseName) => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter((id) => id !== courseId));
      toast.info(`Unenrolled from ${courseName}`);
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
      toast.success(`Enrolled in ${courseName}`);
    }
  };

  const isBookmarked = (courseId) => {
    return bookmarkedCourses.includes(courseId);
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  return (
    <div className="course_container">
      <ToastContainer />
      {CourseData.map((data) => (
        <div className="box" key={data.id}>
          <div className="box-content">
            <div className="image-box">
              <img src={data.img} alt={data.courseName} className="course-image" />
            </div>
          </div>
          <div className="image-box-details">
            <div className="image-box-details-info">
              <div className="bookmarkcourse">
                <div
                  className={`bookmarkC ${isBookmarked(data.id) ? "bookmarked" : ""}`}
                  onClick={() => handleBookmarkClick(data.id, data.courseName)}
                  aria-label="coursebookmark"
                >
                  {isBookmarked(data.id) ? (
                    <BookmarkIcon style={{ color: "white" }} />
                  ) : (
                    <BookmarkBorderIcon />
                  )}
                </div>
              </div>
              <h3>{data.courseName}</h3>
              <p>Exam Format: {data.examFormat}</p>
              <p>No. of Papers: {data.Noofpapers}</p>
              <p>Exam Length: {data.ExamLength}</p>
              {isEnrolled(data.id) ? (
                <button className="enroll-button"style={{marginLeft:"260px"}} onClick={() => handleEnrollClick(data.id, data.courseName)}>Enrolled</button>
              ) : (
                <button className="enroll-button" onClick={() => handleEnrollClick(data.id, data.courseName)}>Enroll</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
