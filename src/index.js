import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './componats/Routes';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './auth/AuthContext';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import CartProvider from './auth/CartContext';



const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
      <AlertProvider template={AlertTemplate} {...options}>
      <Routes />
      </AlertProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
