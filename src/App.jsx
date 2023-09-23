import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

// Custom styles
import './App.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
