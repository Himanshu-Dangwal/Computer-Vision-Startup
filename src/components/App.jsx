import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthComponent from "./AuthComponent";
import ImageComponent from "./ImageComponent";
import PinterestComponent from "./PinterestComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route path="/images" element={<ImageComponent />} />
        <Route path="/pinterest" element={<PinterestComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
