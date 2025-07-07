import './App.css';
import { Routes, Route } from 'react-router-dom';

// Page components
import Signup from './pages/Signup/Signup.js'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
