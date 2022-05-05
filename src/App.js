import React from "react";
import { Route, BrowserRouter} from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';



function App() {
  return (
    <BrowserRouter>
      <Route component = { Login } path="/" exact />
      <Route  component = { Home } path="/home" />
    </BrowserRouter>
  );
}

export default App;
