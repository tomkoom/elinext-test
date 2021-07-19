import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">

      <Header />
      <div className="MainContainer">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
