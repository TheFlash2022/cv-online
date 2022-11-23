import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "animate.css";
import Hello from "./pages/Hello";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
