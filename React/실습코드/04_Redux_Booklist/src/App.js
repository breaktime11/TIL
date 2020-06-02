import React from 'react';
import './App.css';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList />
        <BookDetail />
      </header>
    </div>
  );
}

export default App;
