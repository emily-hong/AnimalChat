import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  function onclickButton() {
    axios.get('http://localhost:4001/', { withCredentials: true })
  .then(function(response) {
    setIsLogin(true)
  })   
  }
  
  return (
    <div className="App">
      <button onClick={onclickButton} > 버튼 </button>
      { isLogin ? 'hello world' : 'welcome hell world :)' }
    </div>
  );
}

export default App;
