import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHook from './appHook';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <AddBook />
      <AppHook />
    </div>
  );
}

export default App;
