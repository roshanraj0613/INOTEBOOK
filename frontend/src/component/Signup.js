import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Signup(props) {
  let navigate =  useNavigate();
  
  const[credential, Setcredential]= useState({name:"",email:"",password:"", cpassword:""})
  const{name,email,password,cpassword} = credential;
  const handlesubmit= async(e)=>{
    e.preventDefault();
    if(password===cpassword){
    const response = await fetch(`http://localhost:5000/api/auth/createUser`,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password})
    });
  
    const json = await response.json();
    console.log(json);
    
    if(json.success){
      // save the auth token redirect 
       localStorage.setItem('token',json.authtoken)
       navigate("/");
       props.showalert("Account created successfully","success")
    }
    else{
       props.showalert("Invalid details!","danger")
    }
  }
    else{
      props.showalert("confirm password must be equal to password","error");
    }
  }

  const onChange = (e)=>{
    Setcredential({...credential ,[e.target.name]: e.target.value} )
    } 

  return (
    <div style={{color:"white"}}>
      <form onSubmit={handlesubmit}>
      <div className='mb-4'>
          <h1>Create a new account</h1>
          <p>use your email to create a new account</p>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" id="name" name="name" onChange={onChange}aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange}aria-describedby="emailHelp"/>
            <div style={{color:"white"}} id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"name='password' onChange={onChange}minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="password" name='cpassword' onChange={onChange}minLength={5} required/>
        </div>
         
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
