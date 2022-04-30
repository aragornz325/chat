import React, { useContext } from 'react';
import { Context } from '../index';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
   const auth = getAuth()
   auth.languageCode = "it";

   const loginGoogle = async () => {
      const provider = new GoogleAuthProvider();
      const {user} = await signInWithPopup(auth, provider)
      if (user.emailVerified === false){
         return "verifique si email"
      }else {
         console.log("user------------------->: ", user)
         alert( "email verificado")
      }
   }

   
   const loginFacebook = async () => {
      let res2 = ''
      const provider = new FacebookAuthProvider();
       const user = await signInWithPopup(auth, provider)
       alert(user)
      .then((result)=> {
         res2 = result
         console.log(result)
         const user = result.user;
         const credential = FacebookAuthProvider.credentialFromResult(result);
         const accessToken = credential.accessToken;
         alert(res2)
      }).catch((error)=>{
         alert(error)
      })}

   return (
      <div className="bottons">
      <div style={{height: window.innerHeight - 50}} className='login-container'>
         <div onClick={loginGoogle} className='btn btn-green'>Entrar con google</div>
      </div>
      <div style={{height: window.innerHeight - 50}} className='login-container'>
         <div onClick={loginFacebook} className='btn btn-blue'>Entrar con facebook</div>
      </div>
      </div>
   );
};

export default Login;