import React, { useEffect } from 'react'
import Login from './Login';
import Browser from './Browser';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path :"/",
      element : <Login/>,
    },
    {
      path :"/browser",
      element : <Browser/>,
    },
  ])
  //Doing this in Use Effect because we want it to trigerred only one time
  useEffect(()=>{
    //got this fxn from firebase documentation for managing users
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email: email, displayName:displayName,photoURL: photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
    
  })
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div> 
  );
}

export default Body