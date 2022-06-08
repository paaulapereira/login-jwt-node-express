import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Congratulations from './pages/Congratulations';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/congratulations" element={<Congratulations />}></Route>
      </Routes>
    </div>
  );
};
export default App;
