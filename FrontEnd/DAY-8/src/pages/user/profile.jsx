// import React,{Link} from "react";
// import img from "/src/assets/css/images/logo.png";
// import "/src/assets/css/profile.css";

// const Profile = () => {
//   const userData = {
//     name: "RanjithKumar",
//     address: "Coimbatore, Tamil Nadu",
//     Role: "Admin",
//     Email_Address: "722721eucs118@gmail.com",
//     Phone_Number: "1234567890",
//     age: "20",
//     profilePicture: img,
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="gradient-containerprofile">


//         </div>

//         <div
//           className="profile-content"
//           style={{
//             backgroundColor: "black",
//             height: "350px",
//             color: "white",
//           }}
//         >
//           <div className="profile-image">
//             <img src={userData.profilePicture} alt="Profile" />
//           </div>
//           <h1
//             className="profile-heading"
//             style={{ textAlign: "center", marginTop: "10px" }}
//           >
//             {userData.name}
//           </h1>
//           <p
//             className="profile-subheading"
//             style={{ textAlign: "center", marginTop: "10px" }}
//           >
//             {userData.address}
//           </p>

//           <div className="profile-info">
//             <div className="info-rowprofile">
//               <p>Age</p>
//               <div className="info-row-dataprofile">
//                 <p>: {userData.age}</p>
//               </div>
//             </div>
//             <div className="info-rowprofile">
//               <p>Role</p>
//               <div className="info-row-dataprofile"><p>: {userData.Role}</p></div>
//             </div>
//             <div className="info-rowprofile">
//               <p>Email</p>
//               <div className="info-row-dataprofile"><p>: {userData.Email_Address}</p></div>
//             </div>
//             <div className="info-rowprofile">
//               <p>Phone</p>
//               <div className="info-row-dataprofile"><p>: {userData.Phone_Number}</p></div>
//             </div>
//           </div>
//         </div>
//         <div className="profile-bottom">
//         <button className="profile-bottom-btn">Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import '/src/assets/css/profile.css';

function Profile() {
  const [username, setUsername] = useState('Bruce Wayne');
  const [email] = useState('idk_bat@example.com');
  const [password, setPassword] = useState('IM_Batman');
  const [mobileNumber, setMobileNumber] = useState('89895-90900');
  const [role] = useState('User');
  const [showPassword, setShowPassword] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingMobileNumber, setIsEditingMobileNumber] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
  };

  const handlePasswordEdit = () => {
    setIsEditingPassword(true);
  };

  const handleMobileNumberEdit = () => {
    setIsEditingMobileNumber(true);
  };

  const handleSaveChanges = () => {
    // Perform save changes logic here (e.g., make API call)
    // For now, just show a notification
    toast.success('Profile updated successfully');
    // Reset editing states
    setIsEditingUsername(false);
    setIsEditingPassword(false);
    setIsEditingMobileNumber(false);
  };

  return (
    <div className="container-profile">
      <header>
        <h2>Profile</h2>
      </header>
      <div className="profile-details">
        <div>
          <label>Username:</label>
          {isEditingUsername ? (
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          ) : (
            <input type="text" value={username} readOnly />
          )}
          {!isEditingUsername && <EditIcon onClick={handleUsernameEdit} />}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} readOnly />
        </div>
        <div>
          <label>Password:</label>
          {isEditingPassword ? (
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <VisibilityOffIcon className="toggle-password" onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityIcon className="toggle-password" onClick={togglePasswordVisibility} />
              )}
            </div>
          ) : (
            <input type="password" value={password} readOnly={true} />
          )}
          {!isEditingPassword && <EditIcon onClick={handlePasswordEdit} />}
        </div>
        <div>
          <label>Mobile Number:</label>
          {isEditingMobileNumber ? (
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          ) : (
            <input type="text" value={mobileNumber} readOnly />
          )}
          {!isEditingMobileNumber && <EditIcon onClick={handleMobileNumberEdit} />}
        </div>
        {/* Save Changes button */}
        {(isEditingUsername || isEditingPassword || isEditingMobileNumber) && (
          <div>
            <button onClick={handleSaveChanges}>
              <SaveIcon /> Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;

