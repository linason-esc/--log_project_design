import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DiaryHome from './DiaryHome';
import DiaryOpen from './DiaryOpen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DiaryHome />} />
          <Route path="/open" element={<DiaryOpen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
