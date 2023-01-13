import './App.css';
import React, { useState, useEffect } from 'react'
import Signup from './Signup';
import Login from './Login';
import MyNotes from './MyNotes'
import NoteForm from './NoteForm';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom'


export const UserContext = React.createContext()

function App() {

  const [ user, setUser ] = useState({}) 

  useEffect(()=>{
    fetch('/me')
    .then(res => {
      if(res.ok) res.json().then(data => setUser(data))
    })
  }, [])
  


  return (
    <UserContext.Provider value={[user, setUser]}>

      <div className="App">
          <h1>App Home Page</h1>
          
          <Navbar />
          <Switch>

            <Route path='/my-notes'>
              <MyNotes />
            </Route>

            <Route path='/new-note'>
              <NoteForm />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/signup'>
              <Signup />
            </Route>

          </Switch>


      </div>

    </UserContext.Provider>

  );
}

export default App;
