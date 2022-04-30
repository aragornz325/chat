import React, {useContext} from 'react';
import logo from '../static/image/logo.png'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'
import {signOut } from "firebase/auth";

const Navbar = () => {
   // const {currentUser} =  getAuth()
   // console.log("currentUser: ", getAuth())
   const {auth} = useContext(Context)
   const [user] = useAuthState(auth)
   return (
      <nav className='navbar'>
         <img className='logo-chat' src={logo} alt="logo"/>
         <div className='auth-btns'>
            {user
               ?<Link to="/login">
                  <div onClick={()=>signOut(auth)} className='btn btn-red'>salir</div>
               </Link>
               :<Link to="/login">
                  <div className='btn btn-green'>salir</div>
               </Link>
            }
         </div>
      </nav>
   );
}; 

export default Navbar;