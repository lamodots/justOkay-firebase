import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalAuthContextProvider from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GlobalAuthContextProvider>
  <BrowserRouter>

    <App />
  </BrowserRouter>
</GlobalAuthContextProvider>

);


