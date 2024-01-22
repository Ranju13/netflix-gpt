import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, LANG } from '../utils/constants';
import { setGptSwitchButton } from '../utils/gptSlice';
import { setLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);
  const gptSwitch = useSelector(store => store.gpt?.gptSwitch)

  const signOutHandler = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}));
          navigate('/browse');
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      });

      return (()=> unsubscribe());
}, [])

const changeLangHandler = (e) => {
  console.log(e.target.value)
  dispatch(setLanguage(e.target.value));
}

  return (
    <div className='absolute w-screen p-6 mx-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
            className='m-1 p-1 w-44'
            src={LOGO}
            alt='logo'
        />
        {user && <div className='flex justify-centre'>
          <select className='px-4 my-3 rounded-lg bg-gray-800 text-white' onChange={(e) => changeLangHandler(e)}>
          {LANG.map((ln)=> <option key={ln.identifier} value={ln.identifier}>{ln.value}</option>)}
          </select>
          <button 
            className='text-white mx-2 px-3 my-2 bg-purple-800 rounded-md' 
            onClick={()=> dispatch(setGptSwitchButton())}
            >{gptSwitch ? 'Back to Home' : 'GPT Search'}</button>
          <div className='flex justify-center my-2'>
            <img className='w-10 h-10' alt='img' src={user?.photoURL}/>
            <button onClick={signOutHandler} className='text-white'>Sign Out</button>
          </div>
        </div>}
    </div>
  )
}

export default Header