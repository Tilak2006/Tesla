import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Cybertruck from "./assets/CBT.webp"
import Content from './Content'
import About from './About'
import Navbar from './Navbar'
import Login from "./Login"
import Cars from './Cars';
import Explore from './Explore';
import Discover from './Discover';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
