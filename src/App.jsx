import React from "react";
import './style/App.scss'
import './style/Header.scss'
import './style/mediascreen.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";  
import Footer from "./components/Footer";
import Contact from './components/Contact'   
import Services from './components/Services'   

// import './style/Header.scss'
// import './style/App.scss'
// import './style/Home.scss'


function App() {  
  return (<>  
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />  
        <Route path="/Services" element={<Services />} /> 
      </Routes>  
    </Router>  
    <Footer />
  </>
  );
}

export default App;

