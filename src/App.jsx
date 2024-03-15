import Header from "./components/Header"
//import Home from "./pages/Home";
//import About from "./pages/About";
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Banner from "./components/Banner"

import React from "react";
//import Gallery from "./Gallery/Gallery";
//import imgHomeBanner from "./assets/image/background-banner";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route>
        <Header/>
        <Banner/>
        <Cards/>
        <Footer/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App