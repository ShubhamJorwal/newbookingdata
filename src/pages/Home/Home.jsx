

import React, { useState, useEffect } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function BookingForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const token = localStorage.getItem("token");

  const Navigate = useNavigate();
  useEffect(() => {
    const userBookingData = localStorage.getItem("UserBookingData");
    if (userBookingData) {
      Navigate("/checkout");
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // const handlePhoneNumberChange = (event) => {
  //   setPhoneNumber(event.target.value);
  // };

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    
    // Remove any non-digit characters from the input
    const phoneNumber = inputPhoneNumber.replace(/\D/g, "");
    
    // Validate the phone number format
    const phoneNumberRegex = /^\d{10}$/; // Regular expression for 10-digit numbers
    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage("Phone number must be a 10-digit number");
    } else {
      setErrorMessage("");
    }
  
    // Set the formatted phone number
    setPhoneNumber(phoneNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(
        "https://admin.obwsalon.com/api/create/customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            first_name: name,
            contact_no: phoneNumber,
          }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        // Save the created user data to localStorage
        localStorage.setItem("UserBookingData", JSON.stringify(data));
        // Reset form fields
        setName("");
        setPhoneNumber("");
        setErrorMessage("");
        Navigate("/checkout");
      } else {
        console.error("Failed to create customer");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleBackClick = () => {
    Navigate("/services/women")
  };

  return (
    <>
      <div id="StartBook"><button id="firstbtn" className="btnofstartbook"  onClick={handleBackClick} > back</button>
        <div id="suggestionsBox">
          <h2>Enter Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              type="number"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Mobile Number"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
