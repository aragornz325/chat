import React, { useContext } from 'react';
import { Context } from '../index';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
   const {auth} = useContext(Context)

   const login = async () => {
      const provider = new GoogleAuthProvider();
      const {user} = await signInWithPopup(auth, provider)
      console.log("user: ", user)
   }

   return (
      <div style={{height: window.innerHeight - 50}} className='login-container'>
         <div onClick={login} className='btn btn-green'>Entrar con google</div>
      </div>
   );
};

export default Login;