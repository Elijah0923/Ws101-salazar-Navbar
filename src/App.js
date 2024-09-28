// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => <div><h1>Home Page</h1></div>;
const About = () => <div><h1>About Page</h1></div>;
const Services = () => <div><h1>Services Page</h1></div>;
const Contact = () => <div><h1>Contact Page</h1></div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
