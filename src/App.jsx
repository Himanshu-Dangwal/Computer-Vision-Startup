import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UploadPhoto from './components/UploadPhoto';  
import FetchFacebookImage from './components/FetchFacebookImage'; 
import AuthComponent from "./components/AuthComponent";
import ImageComponent from "./components/ImageComponent";
import PinterestComponent from "./components/PinterestComponent";

import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/uploadphoto"  element={<UploadPhoto/>} />
          <Route path="/fetch" element={<FetchFacebookImage/>} />
          <Route path="/auth" element={<AuthComponent />} />
        <Route path="/images" element={<ImageComponent />} />
        <Route path="/pinterest" element={<PinterestComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
