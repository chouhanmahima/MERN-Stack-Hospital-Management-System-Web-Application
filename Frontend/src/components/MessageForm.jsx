import axios from 'axios';
import React, { useState } from 'react'
import { toast } from "react-toastify";

const MessageForm = () => {

  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Form Handle: when submit the form it will not refresh the page
  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://mern-stack-hospital-management-system-t8is.onrender.com/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      ).then(res => {
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className='container form-component message-form'>
      <h2>Send Us a Message</h2>
      <form onSubmit={handleMessage}>

        {/* First Name & Last Name  */}
        <div>
          <input 
            type='text' 
            placeholder='First Name' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
            type='text' 
            placeholder='Last Name' 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email & Phone Number  */}
        <div>
          <input 
            type='text' 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type='number' 
            placeholder='Phone Number' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Message area  */}
        <textarea 
          rows={7} 
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>

        {/* Submit Button  */}
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" />
    </div>
  )
}

export default MessageForm