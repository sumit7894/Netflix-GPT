import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick =()=>{
    //validate form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
  }
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
        <div>
        <img
        className="absolute" 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='background'/>    
        </div>
        <form onSubmit={(e)=>(e.preventDefault())} 
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          {!isSignInForm && (<input type='text' placeholder='First Name' 
          className='p-4 my-4 w-full bg-gray-700'></input>)}
          <input type='text' placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700' ref={email}></input>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' ref={password}></input>
          <p className='py-2 text-red-600 text-lg font-bold'>{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix-Gpt? Sign UP now" : "Already registered Sing In now !!"}
          </p>
        </form>
    </div>
  )
}

export default Login