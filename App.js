import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
          //login
          dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.name,
              photoUrl: userAuth.user.profilePic,
          }))
      }
      else {
        //logout
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />
     
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
    
    </div>
  );
}

export default App;
