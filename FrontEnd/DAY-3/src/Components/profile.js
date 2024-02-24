import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./profile.css"; // Import the CSS file
// import img from "../images/profile.jpg"; 

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8181/api/v1/auth/email");
        const userDetails = response.data;
        if (userDetails) {
          const loggedInUserDetails = userDetails.find((user) => user.email === email);
          setLoggedInUser(loggedInUserDetails);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfileData();
  }, [email, password]); // Fetch profile data when email or password changes

  // Event handlers for input field changes
  const handleChangeFirstName = (e) => {
    setLoggedInUser({ ...loggedInUser, first_name: e.target.value });
  };

  const handleChangeLastName = (e) => {
    setLoggedInUser({ ...loggedInUser, last_name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setLoggedInUser({ ...loggedInUser, email: e.target.value });
  };

  const handleChangeMobileNumber = (e) => {
    setLoggedInUser({ ...loggedInUser, mobilenumber: e.target.value });
  };

  // Event handler for the "Save" button
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8181/api/v1/auth/${loggedInUser.id}`
      );
      // Handle the successful deletion response here, if needed.
      alert("User deleted successfully!");
    } catch (error) {
      // Handle errors, if any.
      alert("Error deleting user. Please try again.");
    }
  };
  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8181/api/v1/auth/${loggedInUser.id}`,
        loggedInUser
      );
      // Handle the successful deletion response here, if needed.
      alert("User deleted successfully!");
    } catch (error) {
      // Handle errors, if any.
      alert("Error deleting user. Please try again.");
    }
  };
  

  return (
    <div>
      {loggedInUser && (
        <div className="profile_container">
          <div className="profile_center">
            <div className="profile_img_card">
              <img
                // src={img}
                alt="profileImage"
                style={{ height: "200px", borderRadius: "200px" }}
              />
              <label className="profile_input_image_label">Profile Image</label>
            </div>
            <div className="profile_section">
              <div className="profile_section_input">
                <label>first_name</label>
                <input
                  type="text"
                  value={loggedInUser.first_name}
                  className="profile_input"
                  onChange={handleChangeFirstName}
                />
              </div>
              <div className="profile_section_input">
                <label>last_name</label>
                <input
                  type="text"
                  value={loggedInUser.last_name}
                  className="profile_input"
                  onChange={handleChangeLastName}
                />
              </div>
              <div className="profile_section_input">
                <label>email</label>
                <input
                  type="email"
                  value={loggedInUser.email}
                  className="profile_input"
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="profile_section_input">
                <label>contact</label>
                <input
                  type="tel"
                  value={loggedInUser.mobilenumber}
                  className="profile_input"
                  onChange={handleChangeMobileNumber}
                />
              </div>
            </div>
            <div className="profile_save_Button">
            <button className="save_button" onClick={handleSave}>
              Save
            </button>
              <button className="delete_button" onClick={handleDelete}>
               delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;