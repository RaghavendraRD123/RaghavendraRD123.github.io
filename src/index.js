import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white' ;  // '#00ff00';
console.log('styles:',document.body.style.backgroundColor, document.body.style.color)
root.render(
  // <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
