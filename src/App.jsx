import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './Routes';
import Loading from './components/Loader'

import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from './index'

const App = () => {

  const {auth} = useContext(Context)
  const loading = useAuthState(auth)[1]

  if(loading){
    return <Loading/>
  }

  return (
    <BrowserRouter>
      <div className = 'containet'>
        <Navbar/>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
};

export default App;