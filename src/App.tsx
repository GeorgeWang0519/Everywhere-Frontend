import React from 'react';
import './App.css';
import Welcome from './home';
import BubbleCanvas from './bubbleCanvas';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/Logo.png" className ="Logo" alt="Everywhere logo" />
      <a href="https://www.google.com">Home</a>
      <a href="https://www.google.com">Playground</a>
      <a href="https://www.example.com">Task</a>
      <a href="https://www.example.com">Post</a>
        <div className='Welcome-Container'><Welcome name='George'/></div>
      </header>
      <main className="App-main">
      <BubbleCanvas />
      <h1 data-text="HELLO!">HELLO!</h1>
      </main>


      <footer className="App-footer">
        <div>I'm footer</div>
      </footer>
    </div>
  );
}

export default App;
