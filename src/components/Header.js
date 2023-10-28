import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    //Doing this in Use Effect because we want it to trigerred only one time
    useEffect(()=>{
      //got this fxn from firebase documentation for managing users
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email: email, displayName:displayName,photoURL: photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      }); 
    },[])
  const user = useSelector(store => store.user);
  console.log("user",user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
     navigate("/error");
    });
  };
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className='w-44' 
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo">
      </img>
      {user && (<div className='flex p-8'>
        <img className='w-20'
        alt="userIcon"
        src={user?.photoURL}/>
        <button
        onClick={handleSignOut}
        className='text-white font-bold'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header