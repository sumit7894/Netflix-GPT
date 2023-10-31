import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    //Doing this in Use Effect beccause we want it to trigerred only one time
    useEffect(()=>{
      //got this fxn from firebase documentation for managing users
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email: email, displayName:displayName,photoURL: photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      }); 
      //Unsubsribe when component unmount
      return() => unsubscribe();
    },[])
  const user = useSelector(store => store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
     navigate("/error");
    });
  };
  
  const handleGptSearchClick =()=>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className='w-44' 
      src={LOGO}
      alt="logo">
      </img>
      {user && (
      <div className='flex p-8'>
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
        onClick={handleGptSearchClick}
        >
          Searh gpt
        </button>
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