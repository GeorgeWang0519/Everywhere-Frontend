import React from 'react';
import './App.css';
import './style.css';
import Welcome from './home';
import BubbleCanvas from './bubbleCanvas';
import Adverti from './adverti';
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
      <footer className="App-footer">
        <Adverti />
      </footer>
      <main className="App-main">
        <BubbleCanvas /> 
       <h1 data-text="JOIN US!">Join US!</h1> 
      </main>
    </div>
  );
}

export default App;
