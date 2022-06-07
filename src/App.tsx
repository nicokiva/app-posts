import React from 'react';
import './App.css';
import List from './components/list/index';

function App() {
  return (
    <div className="App">
      <header className="app-header">Posts App</header>
      <section className="app-content">
        <List />
      </section>
    </div>
  );
}

export default App;
