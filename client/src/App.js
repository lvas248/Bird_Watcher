import './App.css';
import Signup from './Signup';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const UserContext = React.createContext()

function App() {

  const [ user, setUser ] = useState({}) 



  return (
    <UserContext.Provider value={[user, setUser]}>

      <div className="App">
          <h1>App Home Page</h1>

          <Signup />

      </div>

    </UserContext.Provider>

  );
}

export default App;
