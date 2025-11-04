// This is the finalized file content for src/components/Skills/Skills.tsx

import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws, FaJava } from 'react-icons/fa';
// Ensure these imports are correct based on your specific installed version of react-icons
import { SiTypescript, SiTailwindcss, SiFlask, SiMongodb, SiJavascript, SiPostgresql, SiSqlite, SiGithub, SiVsco, SiBootstrap } from 'react-icons/si';
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

// Define the TypeScript interface for a single skill object
interface Skill {
  name: string;
  category: string;
  icon: JSX.Element | null;
}

// Define the type for the resulting grouped object
interface GroupedSkills {
  [category: string]: Skill[];
}

const skills: Skill[] = [
  // --- Languages ---
  { name: 'Python', category: 'Languages', icon: <FaPython className="text-yellow-400" /> },
  { name: 'JavaScript', category: 'Languages', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'Java', category: 'Languages', icon: <FaJava className="text-blue-500" /> },
  { name: 'SQL', category: 'Languages', icon: <SiPostgresql className="text-blue-600" /> },
  { name: 'HTML', category: 'Languages', icon: <IoLogoHtml5 className="text-orange-500" /> },
  { name: 'CSS', category: 'Languages', icon: <IoLogoCss3 className="text-blue-500" /> },
  { name: 'TypeScript', category: 'Languages', icon: <SiTypescript className="text-blue-500" /> },

  // --- Frameworks/Libraries ---
  { name: 'React', category: 'Frameworks/Libraries', icon: <FaReact className="text-blue-400" /> },
  { name: 'Flask', category: 'Frameworks/Libraries', icon: <SiFlask className="text-gray-300" /> },
  { name: 'Bootstrap', category: 'Frameworks/Libraries', icon: <SiBootstrap className="text-purple-600" /> },
  { name: 'Tailwind CSS', category: 'Frameworks/Libraries', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', category: 'Frameworks/Libraries', icon: <FaNodeJs className="text-green-500" /> },

  // --- Databases ---
  { name: 'PostgreSQL', category: 'Databases', icon: <SiPostgresql className="text-blue-600" /> },
  { name: 'SQLite', category: 'Databases', icon: <SiSqlite className="text-blue-400" /> },
  { name: 'MongoDB', category: 'Databases', icon: <SiMongodb className="text-green-400" /> },

  // --- Cloud Platforms & Software Development Tools ---
  { name: 'AWS', category: 'Tools', icon: <FaAws className="text-orange-600" /> },
  { name: 'Azure', category: 'Tools', icon: null },
  { name: 'GitHub', category: 'Tools', icon: <SiGithub className="text-gray-800" /> },
  { name: 'Git', category: 'Tools', icon: <FaGitAlt className="text-orange-500" /> },
  { name: 'VS Code', category: 'Tools', icon: <SiVsco className="text-blue-400" /> }, // Corrected name
  { name: 'RESTful APIs', category: 'Tools', icon: null },

  // --- Software Development Practices & Other ---
  { name: 'SDLC', category: 'Practices', icon: null },
  { name: 'Agile', category: 'Practices', icon: null },
  { name: 'Software Integration', category: 'Practices', icon: null },
  { name: 'New Program Development', category: 'Practices', icon: null },
  { name: 'Product Design & Architecture', category: 'Practices', icon: null },
  { name: 'Research and Development', category: 'Practices', icon: null },
  { name: 'Testing & QA', category: 'Practices', icon: null },
  { name: 'Product Quality', category: 'Practices', icon: null },
  { name: 'Connectivity', category: 'Other', icon: null },
  { name: 'Interfaces', category: 'Other', icon: null },
  { name: 'Software Packages', category: 'Other', icon: null },
];

const SkillsCategorized = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as GroupedSkills);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      {Object.entries(groupedSkills).map(([category, skillList]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b pb-1">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {skillList.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-2 p-2 border rounded-lg shadow-sm bg-white"
              >
                {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCategorized;