import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import './styles/main.scss'
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/Logement/:id" element={<Logement />} />
      {/* <Route path="/Carrousel" element={<Carrousel />} /> */}
    </Routes >
    <Footer />

  </BrowserRouter>

  // </React.StrictMode>
);

