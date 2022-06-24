import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
ReactDOM.render( // Me faire un rendu de tout ce qui a dans App 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

