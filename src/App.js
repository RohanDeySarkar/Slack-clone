import React, { useEffect } from 'react';

import styled from 'styled-components';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import { useSelector, useDispatch } from 'react-redux';

import { selectUser, login, logout } from './features/userSlice';

import {auth} from './firebase';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
          dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          }))
      } else {
          dispatch(logout())
      }
    })
  }, [])
  
  return (
    <div className="app">
      {user ? (
        <Router>
          <>
            <Header />
            
            <AppBody>
              <Sidebar />

              <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        </Router>
      ):(
        <Login />
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
