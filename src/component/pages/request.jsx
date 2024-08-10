import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import dayjs from 'dayjs';
import './request.css';  // For responsive styling

const RequestForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rollNo: '',
    teacherName: '',
    date: '',
    duration: '',
    text: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value
    });
  };

  const handleDurationChange = (e) => {
    setFormData({
      ...formData,
      duration: e.target.value.split(',').map(date => dayjs(date.trim()).format('YYYY-MM-DD'))
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedValues = {
      ...formData,
      date: formData.date ? dayjs(formData.date).format('YYYY-MM-DD') : null,
      duration: formData.duration
    };

    const url = "http://localhost:7000/api/user/requestForm";
    try {
      const result = await axios.post(url, formattedValues);
      console.log(result);
      setMessage(result.data.message);
      toast.success(result.data.message);
      navigate('/certificate');
    } catch (err) {
      console.log(err);
      const errorMessage = err.response?.data?.message || 'Something went wrong';
      setMessage('Error: ' + errorMessage);
      toast.error(errorMessage);
      console.error('Error submitting form', err);
    }
  };

  return (
    <div className="request-form-container">
     <h1>Certificate Generation Form</h1>

      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNo">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="teacherName">Teacher Name:</label>
          <input
            type="text"
            id="teacherName"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (comma-separated dates):</label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="e.g. 2024-08-10, 2024-08-11"
            onChange={handleDurationChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Additional Information:</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
      <ToastContainer />
      {message && <p>{message}</p>}
    </div>
  );
};

export default RequestForm;
