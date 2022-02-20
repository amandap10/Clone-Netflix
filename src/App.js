import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';

import './Services/firebase';


function App() {
  return (
    <Home/>
  );
}

export default App;
