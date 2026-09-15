import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { GymProvider } from './context/GymContext.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(<StrictMode><BrowserRouter><GymProvider><App /></GymProvider></BrowserRouter></StrictMode>);
