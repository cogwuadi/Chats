import './App.css';
// import { ReactDOM } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './msgApp/Home';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="/chatList/:id" element={<Home />} />
      </Routes>
     
    </div>
  );
}

export default App;
