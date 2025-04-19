// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ import this
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/* ✅ Wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
