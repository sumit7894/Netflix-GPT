import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVTAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick =()=>{
    //validate form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: USER_AVTAR,
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(
      addUser({
        uid:uid,
        email: email,
        displayName:displayName,
        photoURL: photoURL}));
    }).catch((error) => {
      setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+"-"+errorCode)
  });
    }
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
        src={BG_URL}
        alt='background'/>    
        </div>
        <form onSubmit={(e)=>(e.preventDefault())} 
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          {!isSignInForm && (<input type='text' ref={name} placeholder='First Name' 
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