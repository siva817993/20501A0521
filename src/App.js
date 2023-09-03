import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import AllTrains from './Components/AllTrains';
import SingleTrain from './Components/SingleTrain';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<AllTrains />} />
        <Route path="/train/:id" element={<SingleTrain />} />
      </Routes>
    </Router>
  );
}

export default App;
