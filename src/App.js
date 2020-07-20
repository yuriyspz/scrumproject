import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className="App">
      <AddBook />
      <BooksList />
    </div>
  );
}

export default App;
