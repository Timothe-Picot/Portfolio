import React from 'react';
import { Element } from 'react-scroll';
import About from './About';
import Footer from './Footer';
import Intro from './Intro';
import Header from './Header';
import ProjectDisplay from './ProjectDisplay';
import Transition from './Transition';
import '../styles/Layout.css';


function App() {
  return (
    <div>
      <Header />
      <Element name="intro" className="element">
        <Intro />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Transition color='white'/>
      <Element name="projects" className="element">
        <ProjectDisplay />
      </Element>
      <Transition color='black'/>
      <Element name="footer" className="element">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
