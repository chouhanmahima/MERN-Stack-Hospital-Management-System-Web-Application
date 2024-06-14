import React, { useContext, useState } from 'react';
import { Context  } from '../main';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(Context);

  // State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uid, setUid] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  
  const navigateTo = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/patient/register", 
        { firstName, lastName, email, phone, uid, dob, gender, password, role : "Patient" }, 
        {
          withCredentials : true, 
          headers : {"Content-Type" : "application/json"}
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } 
    catch (error) {
      toast.error(error.response.data.message);
    }

  };

  if(isAuthenticated){
    return <Navigate to={"/"} />
  }

  return (
    <div className='container form-component register-form'>
      <h2>Sign Up</h2>
      <p>Please Sign Up to Continue</p>
      <p>Sign up to continue and gain full access to your personalized health records, appointment scheduling, and exclusive wellness resources.</p>

      <form onSubmit={handleRegister}>

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

        <div>
          <input 
            type='number' 
            placeholder='UID' 
            value={uid} 
            onChange={(e) => setUid(e.target.value)} 
          />
          <input 
            type='date' 
            placeholder='Date of Birth' 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
          />
        </div>

        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <div style={{
            gap : "10px",
            justifyContent : "flex-end",
            flexDirection : "row",
          }}
        >
          <p style={{marginBottom : 0}}>Already Registered</p>
          <Link 
            to={"/login"}
            style={{
              textDecoration : "none",
              alignItems : "center"
            }}
          >
            Login Now
          </Link>
        </div>

        <div
          style={{
            justifyContent : "center",
            alignItems : "center"
          }}
        >
          <button type='submit'>Register</button>
        </div>

      </form>
    </div>
  )
}

export default Register;