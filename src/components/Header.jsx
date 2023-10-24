import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });  
  }


  return (
    <div className="header flex items-center justify-between px-4">
        <img alt="logo"
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
         className='w-2/12'
         />
         {user &&(
            <div className='w-2/12 flex items-center justify-between'>
              <div className=' w-5/12'>
                <img src={user?.photoURL}/>
              </div>
              <div className='w-6/12'>
                <button className='btn-primary' onClick={handleSignOut}>
                  Sign out
                </button>
              </div>
            </div>
          )}
    </div>
  )
}

export default Header