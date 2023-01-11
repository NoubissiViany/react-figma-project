import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
