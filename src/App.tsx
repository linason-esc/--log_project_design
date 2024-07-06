import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DiaryHome from './DiaryHome';
import DiaryOpen from './DiaryOpen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DiaryHome />} />
        <Route path="/open" element={<DiaryOpen />} />
      </Routes>
    </div>
  );
}

export default App;
