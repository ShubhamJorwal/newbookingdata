import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import './loginmain.scss'

const MainLogin3 = () => {
  const [token, setToken] = useState('');
  const Navigate = useNavigate();

  // const {id} = useParams()

  useEffect(() => {
    const login = async () => {
      try {
        const response = await axios.post('https://admin.obwsalon.com/api/login', {
          email: 'admin@gmail.com',
          password: '123456'
        });

        const { token } = response.data;
        setToken(token);
        localStorage.setItem('token', token);

        // Redirect to the services page
        Navigate('/services/women');
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    const storedToken = localStorage.getItem('token');

    // Check if a token exists in local storage
    if (storedToken) {
      // Token already exists, redirect to services page
      Navigate('/services/women');
    } else {
      // No token found, perform auto-login
      login();
    }

    const fetchAndStoreBranchName = () => {
      const url = window.location.href;
      const lastSegment = url.substring(url.lastIndexOf('/') + 1);
      const branchName = parseInt(lastSegment);
    
      if (!isNaN(branchName)) {
        // localStorage.setItem('branchName', branchName);
      }
    };



    const setBranchName = () => {
      localStorage.setItem('branchName', '3');
    };

    setBranchName();
  
    const removeItem = () => {
      localStorage.removeItem("UserBookingData");
      localStorage.removeItem("selectedProducts");
      localStorage.removeItem("SelectedData");
      localStorage.removeItem("selectedStylist");
      localStorage.removeItem("selectedStylist");
      localStorage.removeItem("TotalAmountBookOFser");
      localStorage.removeItem("TotalAmountBook");
    };
    fetchAndStoreBranchName()
    removeItem()
  }, []);



  return (
    <>
      
      <div id="LoginMainLoader">
      <div class="loader">
    <div class="loader-circle"></div>
    <span class="loader-text">Almost There...</span>
 </div>

      </div>
    </>
  );
};

export default MainLogin3;
