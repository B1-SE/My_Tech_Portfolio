import { Suspense, lazy } from 'react';
import Navbar from './components/Layout/Navbar';
import './index.css';

const Hero = lazy(() => import('./components/Hero/Hero'));
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Hero />
        <About />
        {/* ✅ Skills now comes before Projects */}
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
