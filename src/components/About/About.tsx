const About = () => (
  <section id="about" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        I’m a full-stack developer with a passion for scalable, performant web applications. I focus on clean, reusable architecture and CI/CD automation.
      </p>
      {/* ✅ Resume Button */}
        <a
          href="/Main_SE_Resume_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-4 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"
        >
          View My Resume
        </a>
      </div>
    </section>
);

export default About;
