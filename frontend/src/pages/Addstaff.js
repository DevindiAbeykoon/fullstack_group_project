import React, { useState } from 'react';
import axios from 'axios';
import './addstaff.css'; 


function Addstaff() {
    const [staffData, setStaffData] = useState({
        name: '',
        role: '',
        email: '',
        phoneNumber: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStaffData({ ...staffData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('/api/staff', staffData);
          console.log('Staff member added successfully');
        } catch (error) {
          console.error('Error adding staff member:', error);
        }
      };

  return (

    <div className="add-staff-container bg-light p-3">
      <h1> Add Staff Member</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={staffData.name} onChange={handleInputChange} required />

        <label>Role:</label>
        <input type="text" name="role" value={staffData.role} onChange={handleInputChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={staffData.email} onChange={handleInputChange} required />

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          pattern="[0-9]*"
          value={staffData.phoneNumber}
          onChange={handleInputChange}
          required
        />


        <button className="btn btn-outline-dark" type="submit" >Add Room</button>
      </form>
    </div>
  );
}

export default Addstaff;
