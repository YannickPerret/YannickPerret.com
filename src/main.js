import './style/_settings.scss'
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Header from './Components/header/Header';

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
);


