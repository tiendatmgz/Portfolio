// import { useState } from 'react';
import Navbar from './view/components/Navbar';
import Home from './view/components/home/Home';
import About from './view/components/about/About';
import Contact from './view/components/contact/Contact';
import Project from './view/components/project/Project';


function App() {

  return (
    <div className='font-Jura text-gray-300 h-screen bg-black'>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
