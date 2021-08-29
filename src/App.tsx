import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Sheets/Table/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{left:"2rem"}}>
      <Table />
      </div>
    </div>
  );
}

export default App;
