// import { useState } from 'react';
import Navbar from './view/components/Navbar';
import Home from './view/components/home/Home';
import About from './view/components/about/About';
import Contact from './view/components/contact/Contact';
import Project from './view/components/project/Project';
import Tiltname from './view/components/layout/Tilt';


function App() {

  return (
    <div className='font-Jura text-gray-300 bg-black'>
      <Navbar />
      <Home />
      <Tiltname />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;