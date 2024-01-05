import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((state)=>state.user)

  const signOutHandler = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-screen p-6 mx-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
            className='m-1 p-1 w-44'
            src='https://brand.netflix.com/static/media/logo-netflix.1e66eca0ecf8444cc1dc.svg'
            alt='logo'
        />
        {user && <div className='flex justify-centre'>
          <img className='w-10 h-10' alt='img' src={user?.photoURL}/>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header