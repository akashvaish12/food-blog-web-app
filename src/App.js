import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FoodDetails from './FoodDetails';
import Header from './Header';
import './App.css';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;