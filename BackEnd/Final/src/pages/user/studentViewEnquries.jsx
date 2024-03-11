import React, { useState, useEffect } from 'react';
import '/src/assets/css/studentviewenquire.css';
import { getAllEnquiries } from '../../services/auth';
const StudentViewEnquries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    // Fetch enquiries when component mounts
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await getAllEnquiries();
      setEnquiries(response.data); // Assuming the data returned is an array of enquiries
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      // You can handle errors here, e.g., display an error message
    }
  };

  const handlePopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  return (
    <div className="ViewEnquires">
      <div className="EnquiriesPage-container-viewenquire">
        <h1 className="EnquiriesPage-heading-viewenquire">All Enquiries</h1>
        <table className="EnquiriesPage-table-viewenquire">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Enquiry Description</th>
              <th>Student Email</th>
              <th>Enquiry Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(enquiry => (
              <tr key={enquiry.id}>
                <td>{enquiry.courseName}</td>
                <td>{enquiry.description}</td>
                <td>{enquiry.studentEmail}</td>
                <td>{enquiry.enquiryType}</td>
                <td>
                  <button className="EnquiriesPage-button-viewenquire" onClick={() => handlePopup(enquiry.adminReply)}>Reply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showPopup && (
          <div className="EnquiriesPage-popup-background-viewenquire">
            <div className="EnquiriesPage-popup-viewenquire">
              <p className="EnquiriesPage-close-viewenquire" onClick={() => setShowPopup(false)}>x</p>
              <p>{popupMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentViewEnquries;





// import React, { useState } from 'react';
// import '/src/assets/css/studentviewenquire.css';

// const StudentViewEnquries = () => {
//     const [enquiries, setEnquiries] = useState([
//         { id: 1, courseName: 'Advanced British English Certification', enquiryDescription: 'I have a question about the course content.', studentEmail: 'student1@example.com', enquiryType: 'General', status: 'Pending', adminReply: '' },
//         { id: 2, courseName: 'British Council Certified English Course', enquiryDescription: 'Interested in joining the course. Need more details.', studentEmail: 'student2@example.com', enquiryType: 'Admission', status: 'Replied', adminReply: 'Sure! Please provide your contact details.' },
//         { id: 3, courseName: 'British English Fluency Program', enquiryDescription: 'Enquiring about the duration of the course.', studentEmail: 'student3@example.com', enquiryType: 'Course Details', status: 'Pending', adminReply: '' },
//         { id: 4, courseName: 'British English Language Proficiency Training', enquiryDescription: 'I have a question regarding the syllabus.', studentEmail: 'student4@example.com', enquiryType: 'General', status: 'Replied', adminReply: 'The syllabus covers various topics including organic chemistry, inorganic chemistry, and physical chemistry.' },
//         { id: 5, courseName: 'Comprehensive British English Certification', enquiryDescription: 'Interested in the upcoming seminars.', studentEmail: 'student5@example.com', enquiryType: 'Events', status: 'Pending', adminReply: '' },
//       ]);

//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handlePopup = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//   };

//   return (
//     <div className="ViewEnquires">
//     <div className="EnquiriesPage-container-viewenquire">
//     <h1 className="EnquiriesPage-heading-viewenquire">All Enquiries</h1>
//       <table className="EnquiriesPage-table-viewenquire">
//         <thead >
//           <tr>
//             <th>Course Name</th>
//             <th>Enquiry Description</th>
//             <th>Student Email</th>
//             <th>Enquiry Type</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//         {enquiries.map(enquiry => (
//             <tr key={enquiry.id}>
//               <td>{enquiry.courseName}</td>
//               <td>{enquiry.enquiryDescription}</td>
//               <td>{enquiry.studentEmail}</td>
//               <td>{enquiry.enquiryType}</td>
//               <td>
               
//                   <button  className="EnquiriesPage-button-viewenquire">Reply</button>
              
//                 </td>
//                 </tr>
//                 ))}
//                 </tbody>
//                 </table>
//                 {showPopup && (
//                   <div className="EnquiriesPage-popup-background-viewenquire">
//                   <div className="EnquiriesPage-popup-viewenquire">
//                   <p className="EnquiriesPage-close-viewenquire" onClick={() => setShowPopup(false)}>x</p>
//                   <p>{popupMessage}</p>
//                   </div>
//                   </div>
//                   )}
//                   </div>
//                   </div>
//                   );
//                 };
                
//                 export default StudentViewEnquries;
                

// import React, { useState } from 'react';

// const StudentViewEnquries = () => {
//   const [enquiries] = useState([
//     { id: 1, courseName: 'Advanced British English Certification', enquiryDescription: 'I have a question about the course content.', studentEmail: 'student1@example.com', enquiryType: 'General', status: 'Pending', adminReply: '' },
//     { id: 2, courseName: 'British Council Certified English Course', enquiryDescription: 'Interested in joining the course. Need more details.', studentEmail: 'student2@example.com', enquiryType: 'Admission', status: 'Replied', adminReply: 'Sure! Please provide your contact details.' },
//     { id: 3, courseName: 'British English Fluency Program', enquiryDescription: 'Enquiring about the duration of the course.', studentEmail: 'student3@example.com', enquiryType: 'Course Details', status: 'Pending', adminReply: '' },
//     { id: 4, courseName: 'British English Language Proficiency Training', enquiryDescription: 'I have a question regarding the syllabus.', studentEmail: 'student4@example.com', enquiryType: 'General', status: 'Replied', adminReply: 'The syllabus covers various topics including organic chemistry, inorganic chemistry, and physical chemistry.' },
//     { id: 5, courseName: 'Comprehensive British English Certification', enquiryDescription: 'Interested in the upcoming seminars.', studentEmail: 'student5@example.com', enquiryType: 'Events', status: 'Pending', adminReply: '' },
//   ]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const handlePopup = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '150px',marginBottom:'150px',marginLeft:'40px' }}>
//     <h1 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '30px', color: '#333' }}>All Enquiries</h1>
//       <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #ddd' }}>
//         <thead style={{ backgroundColor: '#f2f2f2' }}>
//           <tr>
//             <th>Course Name</th>
//             <th>Enquiry Description</th>
//             <th>Student Email</th>
//             <th>Enquiry Type</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {enquiries.map(enquiry => (
//             <tr key={enquiry.id} style={{ borderBottom: '1px solid #ddd' }}>
//               <td>{enquiry.courseName}</td>
//               <td>{enquiry.enquiryDescription}</td>
//               <td>{enquiry.studentEmail}</td>
//               <td>{enquiry.enquiryType}</td>
//               <td>
//                 {enquiry.status === 'Replied' && (
//                   <button onClick={() => handlePopup(enquiry.adminReply)} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '8px 16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>View Reply</button>
//                 )}
//                 {enquiry.status === 'Pending' && 'Pending'}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showPopup && (
//         <div style={{ position: 'fixed', zIndex: '1', left: '0', top: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}>
//           <div style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%' }}>
//             <span onClick={() => setShowPopup(false)} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold', cursor: 'pointer' }}>x</span>
//             <p>{popupMessage}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentViewEnquries;
// import React, { useState, useEffect } from 'react';
// import { getAllEnquiries } from '../../services/auth';
// import '/src/assets/css/studentviewenquire.css';

// const StudentViewEnquries = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   useEffect(() => {
//     fetchEnquiries();
//   }, []);

//   const fetchEnquiries = async () => {
//     try {
//       const response = await getAllEnquiries();
//       setEnquiries(response.data);
//       // console.log(enquiry.id) ;// Assuming the response contains the list of enquiries
//     } catch (error) {
//       console.error('Error fetching enquiries:', error);
//     }
//   };

//   const handlePopup = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//   };

//   return (
//     <div className="ViewEnquires">
//       <div className="EnquiriesPage-container-viewenquire">
//         <h1 className="EnquiriesPage-heading-viewenquire">All Enquiries</h1>
//         <table className="EnquiriesPage-table-viewenquire">
//           <thead>
//             <tr>
//               <th>Course Name</th>
//               <th>Enquiry Description</th>
//               <th>Student Email</th>
//               <th>Enquiry Type</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//           {enquiries.map(enquiry => (
//             <tr key={enquiry.id}>
//             <td>{enquiry.courseName}</td>
//             <td>{enquiry.description}</td>
//             <td>{enquiry.studentEmail}</td>
//             <td>{enquiry.enquiryType}</td>
//             <td>
//             {enquiry.status === 'Replied' && (
//               <button onClick={() => handlePopup(enquiry.adminReply)} className="EnquiriesPage-button-viewenquire">View Reply</button>
//               )}
//               {enquiry.status === 'Pending' && 'Pending'}

//               </td>
//               </tr>
//           ))}
//         </tbody>
//         </table>
//         {showPopup && (
//           <div className="EnquiriesPage-popup-background-viewenquire">
//             <div className="EnquiriesPage-popup-viewenquire">
//               <p className="EnquiriesPage-close-viewenquire" onClick={() => setShowPopup(false)}>x</p>
//               <p>{popupMessage}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentViewEnquries;
