import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Front-End Development: Advanced React E-Commerce Web App",
      description:
        "A high-performance e-commerce platform with dynamic product filtering and persistent shopping cart state managed by Redux Toolkit. Implements TDD with unit and integration testing automated via GitHub Actions CI/CD pipeline deploying to Vercel.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "React Query", "Vercel", "GitHub Actions"],
      liveLink: "https://fe-last-project.vercel.app/", // Replace with your live demo link
      githubLink: "https://github.com/B1-SE/FES_Advanced_React_E-Commerce_Web_App.git", // Replace with your GitHub repo link
      image: "/FE_Project_Picture.png" // Replace with your project image later
    },
    {
      title: "Back-End Development: Mechanic API Development and Deployment",
      description:
        "A robust Flask API using Flask-Limiter, Flask-Caching, and token authentication with python-jose. Includes advanced inventory tracking, specialized routes, and a mechanics endpoint sorted by ticket count. Fully tested and deployed to Render with CI/CD via GitHub Actions.",
      technologies: ["Python", "Flask", "Render", "GitHub Actions", "Swagger", "unittest"],
      liveLink: "#",
      githubLink: "https://github.com/B1-SE/Mechanic_API_DEV_and_DEP.git",
      image: "/BE_Project_Picture.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
