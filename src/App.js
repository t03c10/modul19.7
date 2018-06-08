import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentsAddContainer from './CommentsAddContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsAddContainer />
      <CommentsListContainer />
    </div>
  );
};

export default App;