import React from 'react';

import './App.css';
import Reddit from './Reddit';
import {PostProvider} from './PostContext';
function App() {
  return (
    <PostProvider>
    <div>
      <h1 className="App">Reddit React App by Zunair</h1>
      <Reddit />
    </div>
    </PostProvider>
  );
}

export default App;
