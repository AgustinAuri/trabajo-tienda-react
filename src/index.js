import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CarrtioProvider } from './context/CarritoContex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarrtioProvider>
    <App />
  </CarrtioProvider>
);