import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Develop from './pages/Develop';
import Create from './pages/Create';
import Contact from './pages/Contact'
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

export default function App() {
  return <>
    <Navbar />
    <Hero />
    <About />
    <Develop />
    <Create />  
    <Contact />
    <Footer />
    <ScrollButton />
  </>
};
