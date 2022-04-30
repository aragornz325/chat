import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDPnkAyC51Gk7ow952xcS3AtiDjjH72b5Y",
  authDomain: "chatreact-a9eb2.firebaseapp.com",
  databaseURL: "https://chatreact-a9eb2-default-rtdb.firebaseio.com",
  projectId: "chatreact-a9eb2",
  storageBucket: "chatreact-a9eb2.appspot.com",
  messagingSenderId: "250450333934",
  appId: "1:250450333934:web:11c62238a93c7a478ca3ff",
  measurementId: "G-11W1FJ781N"
});
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebaseApp,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
);