import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { ContextProvider } from './contexts/ContexProvider'

ReactDOM.render(
    <ContextProvider>

        <App />
    </ContextProvider>

    , document.getElementById('root'));
