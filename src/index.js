import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <App/>
    </BrowserRouter>

);