import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wild from './Views/Wild';
import PC from './Views/PC';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wild />} />
          <Route path="/pc" element={<PC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
