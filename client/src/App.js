import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Signup from './Signup';
import Login from './Login';


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
          <Login />
          <Signup />

      </div>

    </UserContext.Provider>

  );
}

export default App;
