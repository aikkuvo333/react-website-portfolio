import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
     <NavBar/>
     <Routes>
     <Route path='/' exact Component={Home}/>
     <Route path='/projects' Component={Projects}/>
     <Route path='/contact' exact Component={Contact}/>
     </Routes>
    </Router>
    </>
  )
}

export default App;
