import React, {useContext, useState, useRef, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { addDoc, serverTimestamp, collection, query, orderBy} from "firebase/firestore";
import {Context} from '../index'
import Loader from './Loader';


const Chat = () => {
   const {auth, firestore} = useContext(Context)
   const [user] = useAuthState(auth)
   const [value, setValue] = useState('')
   const messagesEndRef = useRef(null)
   const [messages, loading] = useCollectionData(
      query(
         collection(firestore, 'messages'),
         orderBy('createAt')
      )
   )


   useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
   }, [messages]);



   const sendMessage = async (e) =>{
      e.preventDefault();
      console.log(value)
      if(value !== ''){
         addDoc(collection(firestore, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createAt: serverTimestamp()
        });
      }
      setValue('')
   }

   if(loading){
      return <Loader/>
   }

   return (
      <div className='chat-container'>
         <div className='chat-message'>
            {messages.map(message=>
               user.displayName === message.displayName
               ?<div key={message.uid+message.createAtas} className='message-user message-user-my'>
                  <p className='message-user-name'>{message.displayName} <img src={message.photoURL} alt="autor"/></p>
                  <p className='message-text'>{message.text}</p>
               </div>
               :<div key={message.uid+message.createAt} className='message-user message-user-all'>
                  <p className='message-user-name'><img src={message.photoURL} alt="autor"/> {message.displayName}</p>
                  <p className='message-text'>{message.text}</p>
               </div>
            )}

            <div ref={messagesEndRef} />

         </div>
            <form onSubmit={sendMessage} className="chat-send">
               <input 
                  onChange={e => setValue(e.target.value)}
                  value={value}
                  className='text-send' 
                  type="text" 
               />
               <button
                  type='submit'
                  className='btn btn-green'>
                  enviar
               </button>
            </form>
      </div>

   );
};

export default Chat;