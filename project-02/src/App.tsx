import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="mt-7 mx-12">
         <div>
          <Header />
          <Content />
         </div>
    </div>
  );
}

export default App;
