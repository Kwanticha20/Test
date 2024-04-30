import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import HomePage from './home';
import LayoutPage from './testOne/LayoutPage';

function App() {
  return (
    <Router>
       <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/layout' element={<LayoutPage/>} />
       </Routes>
    </Router>
  )
}

export default App
