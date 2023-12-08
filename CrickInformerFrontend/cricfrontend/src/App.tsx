import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LiveScore from './components/LiveScore';
const App: React.FC=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to='/live' replace={true}/>}/>
        <Route path="/live" element={<LiveScore/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
