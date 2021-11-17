import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/Calculadora';


ReactDOM.render(
  <React.StrictMode>

    <div>
      <h1>Calculadora</h1>
      <Calculadora />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);