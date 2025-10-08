import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFlask, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
