import { memo } from 'react';
import Hero3D from './Hero3D';

const Hero = memo(() => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      {/* Main intro text */}
      <div className="z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="text-teal-400">Brandon Jones</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-300">
          Software Engineer | Full-Stack Developer | React, Node.js, Three.js
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 transition-all"
        >
          View My Work
        </a>
      </div>

      {/* 3D animated section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Hero3D />
      </div>
    </section>
  );
});

export default Hero;
