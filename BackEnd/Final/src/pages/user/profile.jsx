

// import React, { useState } from 'react';
// import { FaEnvelope, FaUser, FaIdBadge, FaPhone } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import '/src/assets/css/profile.css';

// const Profile = ({ role }) => {
//   const navigate = useNavigate();
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('Ranjith');
//   const [age, setAge] = useState('20');
//   const [college, setCollege] = useState('Anna University');
//   const [email, setEmail] = useState('student@example.com');
//   const [phone, setPhone] = useState('123-456-7890');

//   const handleEditProfile = () => {
//     setIsEditing(true);
//   };  

//   const handleSaveChanges = () => {
//     setIsEditing(false);
  
//     console.log('Changes saved');
//   };

//   return (
//     <div className="ProfileHole">
//     <div className="profile-container">
//     <h2 className="profile-heading" >
//         <FaUser style={{ marginRight: '20x', color: '#000' }} /> Student Profile
//       </h2>
//       <div className="profile-section" >
//         <FaIdBadge style={{ marginRight: '10px', color: '#000' }} />
//         <strong className="profile-strong">Name: </strong>
//         {isEditing ? (
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="profile-input"
//           />
//         ) : (
//           <p className="profile-span">{name}</p>
//         )}
//       </div>
//       <div className="profile-section">
//         <FaIdBadge style={{ marginRight: '10px', color: '#000' }} />
//         <strong className="profile-strong">Age:</strong>
//         {isEditing ? (
//           <input
//             type="text"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="profile-input"
//             />
//         ) : (
//           <p className="profile-span">{age}</p>
//         )}
//       </div>
//       <div className="profile-section">
//       <FaIdBadge style={{ marginRight: '10px', color: '#000' }} />
//       <strong className="profile-strong">College:</strong>
//       {isEditing ? (
//           <input
//             type="text"
//             value={college}
//             onChange={(e) => setCollege(e.target.value)}
//             className="profile-input"
//             />
//             ) : (
//               <p className="profile-span">{college}</p>
//               )}
//               </div>
//               <div className="profile-section">
//               <FaIdBadge style={{ marginRight: '10px', color: '#000' }} />
//               <strong className="profile-strong">Role:</strong>
//               <p className="profile-span">{role === 'teacher' ? 'Teacher' : 'Student'}</p>
//               </div>
//       <div className="profile-section">
//       <FaEnvelope style={{ marginRight: '10px', color: '#000' }} />
//       <strong className="profile-strong">Email:</strong>
//         {isEditing ? (
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="profile-input"
//             />
//             ) : (
//               <p className="profile-span">{email}</p>
//               )}
//               </div>
//               <div className="profile-section">
//               <FaPhone style={{ marginRight: '10px', color: '#000' }} />
//               <strong className="profile-strong">Phone:</strong>
//               {isEditing ? (
//                 <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="profile-input"
//           />
//           ) : (
//             <p className="profile-span">{phone}</p>
//             )}
//             </div>
//             {/* Edit and Save Changes Buttons */}
//       <center>
//         {!isEditing ? (
//           <button onClick={handleEditProfile} className="profile-button">
//             Edit Profile
//           </button>
//         ) : (
//           <button onClick={handleSaveChanges} className="profile-button save-changes-button">
//           Save Changes
//           </button>
//         )}
//       </center>
//       {/* Go Back Button */}
//       <center>
//       <button onClick={() => navigate('/user/home')} className="profile-button go-back-button">
//       Go Back
//         </button>
//       </center>
//     </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import '/src/assets/css/profile.css';
import { getUserDetailsByEmail } from '../../services/auth'; // Assuming you have this function

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const userEmail = 'r@gmail.com'; 
        const fetchUserDetails = async () => {
            try {
                const response = await getUserDetailsByEmail(userEmail);
                setUserDetails(response.data); 
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []); // This useEffect will run only once when the component mounts

    return (
        <div className="ProfileHole">
            <div className="profile-container">
                <h2 className="profile-heading">Profile</h2>
                {userDetails ? (
                    <div>
                        <div className="profile-section">
                            <strong className="profile-strong">Name:</strong>
                            <p className="profile-span">{userDetails.name}</p>
                        </div>
                        <div className="profile-section">
                            <strong className="profile-strong">Email:</strong>
                            <p className="profile-span">{userDetails.email}</p>
                        </div>
                        <div className="profile-section">
                            <strong className="profile-strong">Mobile Number:</strong>
                            <p className="profile-span">{userDetails.mobilenumber}</p>
                        </div>
                        <div className="profile-section">
                            <strong className="profile-strong">Age:</strong>
                            <p className="profile-span">{userDetails.age}</p>
                        </div>
                        <div className="profile-section">
                            <strong className="profile-strong">College:</strong>
                            <p className="profile-span">{userDetails.college}</p>
                        </div>
                        <div className="profile-section">
                            <strong className="profile-strong">Role:</strong>
                            <p className="profile-span">{userDetails.role}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Profile;

