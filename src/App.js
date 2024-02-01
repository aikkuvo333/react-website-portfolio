import React from 'react';
import NavBar from './components/components_js/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/pages_js/Home.js';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
