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
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
        <BrowserRouter>   
            <Header />  
            <main>     
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/a-propos-de-moi" element={<AboutMe />}></Route>
                    <Route path="/mes-competences" element={<Skills />}></Route>
                    <Route path="/mes-derniers-projets" element={<Projects />}></Route>
                    <Route path="/me-contacter" element={<Contact />}></Route>
                </Routes>
            </main>  
            
        </BrowserRouter>
);


