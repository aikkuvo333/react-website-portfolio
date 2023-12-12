import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
     <NavBar/>
     <Routes>
     <Route path='/' exact Component={Home}/>
     </Routes>
    </Router>
    </>
  )
}

export default App;
