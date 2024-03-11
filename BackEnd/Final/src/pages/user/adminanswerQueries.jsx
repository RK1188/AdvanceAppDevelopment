// import React, { useState } from 'react';
// import { Button, Input } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import '/src/assets/css/adminanswerqueries.css';

// const initialEnquiries = [
//   {
//     id: 1,
//     courseName: 'Beginner British English',
//     description: 'I am having trouble understanding some basic concepts in the course.',
//     email: 'john@example.com',
//     enquiryType: 'Technical Support',
//   },
//   {
//     id: 2,
//     courseName: 'Intermediate British English',
//     description: 'The course materials are not accessible to me.',
//     email: 'jane@example.com',
//     enquiryType: 'Accessibility Issue',
//   },
//   {
//     id: 3,
//     courseName: 'Advanced British English',
//     description: 'I need more information about the course structure and syllabus.',
//     email: 'mike@example.com',
//     enquiryType: 'General Inquiry',
//   },
//   {
//     id: 4,
//     courseName: 'Business English Certification',
//     description: 'I have completed the course but did not receive a certificate.',
//     email: 'sarah@example.com',
//     enquiryType: 'Certificate Issue',
//   },
// ];

// const AdminAnswerQueries = () => {
//   const [enquiries, setEnquiries] = useState(initialEnquiries);
//   const [selectedEnquiry, setSelectedEnquiry] = useState(null);
//   const [solution, setSolution] = useState('');
//   const [showSolutionInput, setShowSolutionInput] = useState(false);
//   const navigate = useNavigate();

//   const handleEnquiryClick = (enquiry) => {
//     setSelectedEnquiry(enquiry);
//     setShowSolutionInput(true);
//   };

//   const handleSendSolution = () => {
//     const updatedEnquiries = enquiries.filter((enquiry) => enquiry.id !== selectedEnquiry.id);
//     setEnquiries(updatedEnquiries);
//     setShowSolutionInput(false);
//   };

//   return (
//     <div className="modal-containerAdminReply">
//       {showSolutionInput && (
//         <div>
//           <h4 className="modal-headingAdminReply">Help</h4>
//           <p style={{color:"black"}}>Please provide a solution for the enquiry.</p>
//           <Input
//             type="textarea"
//             placeholder="Enter solution..."
//             value={solution}
//             onChange={(e) => setSolution(e.target.value)}
//             className="modal-textareaAdminReply"
//           />
//           <div>
//             <Button color="primary" onClick={handleSendSolution} className="modal-buttonAdminReply">Send</Button>
//             <Button color="secondary" onClick={() => setShowSolutionInput(false)} className="modal-buttonAdminReply">Cancel</Button>
//           </div>
//         </div>
//       )}

//       {!showSolutionInput && (
//         <div className="table-containerAdminReply">
//           <table>
//             <thead>
//               <tr>
//                 <th className="table-headingAdminReply">Course Name</th>
//                 <th className="table-headingAdminReply">Description</th>
//                 <th className="table-headingAdminReply">Email</th>
//                 <th className="table-headingAdminReply">Enquiry Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {enquiries.map((enquiry) => (
//                 <tr key={enquiry.id} onClick={() => handleEnquiryClick(enquiry)} className="table-rowAdminReply">
//                   <td className="table-dataAdminReply">{enquiry.courseName}</td>
//                   <td className="table-dataAdminReply">{enquiry.description}</td>
//                   <td className="table-dataAdminReply">{enquiry.email}</td>
//                   <td className="table-dataAdminReply">{enquiry.enquiryType}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       <div className="goBack-buttonAdminReply">
//         <Button className='buttonAdminReplay'
//           color="primary"
//           onClick={() => navigate('/user/home')}
//           onMouseOver={(e) => e.target.style.backgroundColor = 'gray'}
//           onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
//         >
//           Go Back
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default AdminAnswerQueries;
import React, { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import '/src/assets/css/adminanswerqueries.css';
import { getAllEnquiries } from '../../services/auth';
const AdminAnswerQueries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [solution, setSolution] = useState('');
  const [showSolutionInput, setShowSolutionInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data when component mounts
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await getAllEnquiries(); // Call your API function
      setEnquiries(response.data); // Assuming your API returns data in a 'data' property
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      // Handle error
    }
  };

  const handleEnquiryClick = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setShowSolutionInput(true);
  };

  const handleSendSolution = () => {
    setShowSolutionInput(false);
  };

  return (
    <div className="modal-containerAdminReply">
      {showSolutionInput && (
        <div>
          <h4 className="modal-headingAdminReply">Help</h4>
          <p style={{color:"black"}}>Please provide a solution for the enquiry.</p>
          <Input
            type="textarea"
            placeholder="Enter solution..."
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            className="modal-textareaAdminReply"
          />
          <div>
            <Button color="primary" onClick={handleSendSolution} className="modal-buttonAdminReply">Send</Button>
            <Button color="secondary" onClick={() => setShowSolutionInput(false)} className="modal-buttonAdminReply">Cancel</Button>
          </div>
        </div>
      )}

      {!showSolutionInput && (
        <div className="table-containerAdminReply">
          <table>
            <thead>
              <tr>
                <th className="table-headingAdminReply">Course Name</th>
                <th className="table-headingAdminReply" >Description</th>
                <th className="table-headingAdminReply">Email</th>
                <th className="table-headingAdminReply">Enquiry Type</th>
                <th className="table-headingAdminReply">Status</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id} onClick={() => handleEnquiryClick(enquiry)} className="table-rowAdminReply">
                  <td className="table-dataAdminReply">{enquiry.courseName}</td>
                  <td className="table-dataAdminReply" style={{width:'500px'}}>{enquiry.message}</td>
                  <td className="table-dataAdminReply">{enquiry.email}</td>
                  <td className="table-dataAdminReply">{enquiry.enquiryType}</td>
                  <td>
                  <button className="EnquiriesPage-button-viewenquire-admin" onClick={() => handlePopup(enquiry.adminReply)}>Reply</button>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="goBack-buttonAdminReply">
        <Button className='buttonAdminReplay'
          color="primary"
          onClick={() => navigate('/user/home')}
          onMouseOver={(e) => e.target.style.backgroundColor = 'gray'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default AdminAnswerQueries;

