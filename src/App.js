import logo from './logo.svg';
import './App.css';
import TaskApp from './TaskApp/TaskApp';
import BackToTop from './Test';
import useFetch from './TaskApp/useFetch';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <h1>Example</h1>
      <TaskApp/>
    </div>
  );
}

export default App;
