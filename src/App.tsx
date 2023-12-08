import React from 'react';
import './App.scss';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home/Home';
import Navbar from './containers/Navbar/Navbar';

function App() {
  const location = useLocation();

  return (
    <>
        <Navbar />
        <Routes key={location.pathname} location={location}>
            <Route path='/typescript-reddit-clone/' element={<Home />} />
            <Route path='/typescript-reddit-clone/r/:subredditId' element={<Home />} />
            <Route path='/typescript-reddit-clone/profile' element={<Home />} />
            <Route path='/typescript-reddit-clone/create' element={<Home />} />
            <Route path='*' element={<Home />} />
        </Routes>
    </>  
  );
}

export default App;
