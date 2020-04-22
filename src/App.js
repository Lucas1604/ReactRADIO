import React from 'react';
import './App.css';

import Player from './components/Player';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
      <div>
        <Header />
        <Card />
        <Player />
      </div>
  );
}

export default App;
