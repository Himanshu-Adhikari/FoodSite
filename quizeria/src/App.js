import React from 'react';
import QuizContainer from './components/QuizContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      <main>
        <QuizContainer />
      </main>
    </div>
  );
}

export default App;
