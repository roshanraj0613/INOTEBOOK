import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
 
const  Login=(props)=> {
  let navigate =  useNavigate();
  
  const[credential, Setcredential]= useState({email:"",password:""})

  const handlesubmit= async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credential.email,password:credential.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.Success){
      // save the auth token rederict 
       localStorage.setItem('token',json.authtoken)
       props.showalert("loggedin successfully","success")
       navigate("/");
    }
    else{
      props.showalert("please try to login with correct credential","danger")
    }
  }

  const onChange = (e)=>{
    Setcredential({...credential ,[e.target.name]: e.target.value} )
    } 

  return (
    <div>
      <form onSubmit={handlesubmit} className='mt-3'>
        <div style={{color:"white"}}>
        <div className='mb-4'>
          <h1>Library Management System</h1>
          <p>sign in on the internal palatform</p>
          {/* <div className="d-flex">
                    <Button size="large" fullWidth className="mb-4 me-4" variant="contained" color="primary" startIcon={<FacebookIcon />} component={Link} to="/" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Facebook</Button>
                    <Button size="large" fullWidth className="mb-4" variant="contained" color="error" startIcon={<GoogleIcon />} component={Link} to="/" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Google</Button>
                </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="email" name='email' onChange={onChange}aria-describedby="emailHelp"/>
            <div style={{color:"white"}} id="email" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' minLength={5} onChange={onChange}/>
        </div>
         </div>
        <button type="submit" className="btn btn-primary" onSubmit={handlesubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login

