import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'



function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  return (
    <div className="App">
      
      <Display
        strikes = {strikes}
        setStrikes = {setStrikes}
        balls = {balls}
        setBalls = {setBalls}      
      />

      <Dashboard
        strikes = {strikes}
        setStrikes = {setStrikes}
        balls = {balls}
        setBalls = {setBalls}
      />

    </div>
  );
}

export default App;
