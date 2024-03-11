import axios from "axios";
import instance from "./axios";

const api_uri = "http://localhost:8181";

export const login = (data) => axios.post(`${api_uri}/api/v1/auth/login`, data);

export const register = (data) => {
  return axios.post(`${api_uri}/api/v1/auth/register`, data)
    .catch(error => {
      if (error.response) {
        console.error("Server returned an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      throw error;
    });
};

export const getEnquiriesByEmail = async (email) => {
  try {
    const response = await instance.get(`${api_uri}/api/v1/query/get/by-email/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching enquiries by email:', error);
    throw error;
  }
};
export const fetchCourseDetails = async (courseName) => {
  try {
    const response = await instance.get(`${api_uri}/api/v1/course/get/${courseName}`);
    return response.data; // Assuming the response contains course details
  } catch (error) {
    console.error('Error fetching course details:', error);
    throw error;
  }
};


export const logout = () => axios.post(`${api_uri}/api/v1/auth/logout`);

export const forgotPassword = (data) => axios.patch(`${api_uri}/api/v1/auth/forgotPassword`, data);

// export const saveCourse = (data) => instance.post(`${api_uri}/api/v1/cous/save/course`, data);

export const saveCourse = (courseData) => {
  const formData = new FormData();
  formData.append('courseName', courseData.courseName);
  formData.append('duration', courseData.duration);
  formData.append('fees', courseData.fees);
  formData.append('level', courseData.level);
  formData.append('image', courseData.image);
  
  return instance.post(`${api_uri}/api/v1/course/save/courses`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).catch(error => {
    handleAxiosError(error);
    throw error;
  });
};
export const saveEnquiry = (data) => instance.post(`${api_uri}/api/v1/query/save/enquiry`, data);
export const getAllEnquiries = () => instance.get(`${api_uri}/api/v1/query/get/all-enquiries`);
export const getAllCourses =()=>instance.get(`${api_uri}/api/v1/course/get/all`);
export const getUserDetailsByEmail = (email) => instance.get(`${api_uri}/api/v1/auth/api/v1/auth/user-details?email=${email}`);
export const getAllPayments = async () => {
  try {
    const response = await instance.get(`${api_uri}/api/v1/payment/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }
};

export const getPaymentsByEmail = async (email) => {
  try {
    const response = await instance.get(`${api_uri}/api/v1/payment/email/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payments by email:', error);
    throw error;
  }
};
export const fetchUserDetails = async (email) => {
  try {
    const response = await axios.get(`${api_uri}/api/v1/auth/api/v1/auth/user-details?email=${email}`);
    return response.data; // Assuming the response contains user details
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error; // Propagate the error to the caller
  }
};
export const updateEnquiryReply = async (enquiryId, updatedReply) => {
  try {
    console.log(updatedReply);
    const response = await instance.put(`${api_uri}/api/v1/query/update/${enquiryId}`,  updatedReply);
    return response.data; // Return the response data if needed
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error('Error: Forbidden - Insufficient Permissions');
    } else {
      console.error('Error updating enquiry reply:', error);
    }
    throw error; // Propagate the error to the caller
  }
};
export const savePaymentDetails = async (paymentDetails) => {
  try {
    const response = await instance.post(`${api_uri}/api/v1/payment/save`, paymentDetails);
    console.log('Payment saved:', response.data);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error('Error saving payment details:', error);
    throw error; // Throw the error to handle it in the calling component
  }
};
export const fetchCourses = () => instance.get(`${api_uri}/api/v1/course/get/all`);