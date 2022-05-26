import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);