import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateEmailPassword } from '../utils/validate';
import { isEmpty, isNil } from 'lodash';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE, PHOTO_URL } from '../utils/constants';

const Login = () => {

    const [ isSignIn, setIsSignIn ] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();

    const clickHandler = (e) => {
        e.preventDefault();
        const isError = validateEmailPassword(email.current.value, password.current.value)
        setErrorMessage(isError)

        if(!isNil(isError)) return;
    if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: PHOTO_URL
      }).then(()=>{
        const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}));
      })
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + '-' + errorMessage)
    
  });
} else {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log({user})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + '-' + errorMessage)
  });
}
        
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img
                className=''
                src={BACKGROUND_IMAGE}
                alt = 'login background'
            />
       </div>
        <form className='absolute bg-black p-12 w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-md'>
            <h3 className='text-3xl font-bold pb-4 ml-4'>
                {isSignIn ?  'Sign In' : 'Sign Up'}
            </h3>
            { !isSignIn && 
            <input 
            ref={name}
                type='text' 
                placeholder='Name' 
                className='my-2 p-2 w-full bg-[#333333] text-white rounded-md' 
            />}
            <input 
                ref={email}
                type='text' 
                placeholder='Email or Phone number' 
                className='my-2 p-2 w-full bg-[#333333] text-white rounded-md' 
            />
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='my-2 p-2 w-full bg-[#333333] text-white rounded-md' 
            />
            <div className='text-red-600'>{!isEmpty(errorMessage) && !isNil(errorMessage) && errorMessage}</div>
            <button
                className='my-4 p-4 font-semibold bg-red-700 w-full rounded-md'
                onClick={(e) =>clickHandler(e)}
            >
                {isSignIn ?  'Sign In' : 'Sign Up'}
            </button>

            <div  className='flex justify-between'>
                <div>
                    <input type='checkbox' name='Remember me' value={'Remember me'} id='checkbx_id' className='mr-1'/>
                    <label for="checkbox_id">Remember me</label>
                </div>
                <div>
                <label className='hover:underline'>Need help?</label>
                </div>
            </div>
            <div className='mt-10 mb-4'>
            {isSignIn ? 'New to Netflix? ' : 'Already have account? '}<span onClick={()=> setIsSignIn(!isSignIn)} className='cursor-pointer hover:underline'>{isSignIn ? 'Sign up now.' : 'Sign In now'}</span>
            </div>
            <p className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </form>
        
    </div>
    
  )
               }

export default Login