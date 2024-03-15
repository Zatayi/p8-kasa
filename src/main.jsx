import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App.jsx'
//import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
//import About from '../compononents/pages/About.jsx'
//import Home from '../compononents/pages/Home.jsx'
import './main.scss'
import Sectiontitle from './components/Sectionhometitle.jsx'
//import HomeCards from './components/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    < Sectiontitle/>
    
    < Footer/>
    
    
  </React.StrictMode>,
)
