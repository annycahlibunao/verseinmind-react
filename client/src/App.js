import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


// Page components
import Signup from './pages/Signup/Signup.js'

function App() {
  const [data, setData] = useState([]);

  const handleSignup = (newUser) => {
    try {
      // Check if the project already exists in the list
      const existingUser = data.find(user => user.id === newUser.id);
      // If it doesn't exist, then update the list with the new project
      if (!existingUser) {
        setData(prev => ([...prev, newUser]));
      }
    } catch (error) {
      console.error('Error creating user: ', error);
      alert('Failed to create new user.');
    }
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Signup onCreate={handleSignup}/>} />
      </Routes>
    </div>
  )
}

export default App;
