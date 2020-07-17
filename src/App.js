import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHook from './appHook';
import AddBook from './components/AddBook';
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
