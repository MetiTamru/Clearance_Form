import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import axiosInstance from "./Axios"

const Cafeteria = () => {

  const [department, setDepartments] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    department: '',
    status: "pending"
   
  });

  const navigate = useNavigate();


  useEffect(() => {
    fetchDept();
  }, []);

  const fetchDept = async () => {
    try {
      const response = await axiosInstance.get('/department');
    
      setDepartments(response.data);
      console.log(department)
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     
        
        await axiosInstance.post('/department-clearance', formData);//change ur endpoint
        alert('Form submited successfully!');
      
      navigate('/'); 
    } catch (err) {
      setError('Failed to submit form.');
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <div className="">
       <div className="w-full mt-20 max-w-md mx-auto  p-8 bg-gray-100 border border-gray-300 rounded-lg">
       <h2 className=" text-2xl items-center  font-semibold text-center mb-6">Clearance Submission</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className=" p-6 ">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
             type="text"
            
             name="name"
             value={formData.name}
             onChange={handleChange}
             className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
             required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter your ID"
            className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
           className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="" disabled>Select your department</option>
            {department.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
           
           
          </select>
        </div>
       
        <div className="flex justify-between">
        <button
          type="submit"
          className="bg-teal-500 text-white  p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          
        >
          Submit
        </button>
          
          <button
            type="button"
             className="border border-teal-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ml-2"
         
          >
            Cancel
          </button>
        </div>
       
      </form>
    </div>
    </div>
     
     
        
   
  );
};

export default Cafeteria;
