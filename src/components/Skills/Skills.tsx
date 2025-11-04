import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws, FaJava } from 'react-icons/fa';
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
  { name: 'SQL', category: 'Languages', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'HTML', category: 'Languages', icon: <IoLogoHtml5 className="text-orange-500" /> },
  { name: 'CSS', category: 'Languages', icon: <IoLogoCss3 className="text-blue-500" /> },
  { name: 'TypeScript', category: 'Languages', icon: <SiTypescript className="text-blue-500" /> },

  // --- Frameworks/Libraries ---
  { name: 'React', category: 'Frameworks/Libraries', icon: <FaReact className="text-blue-400" /> },
  { name: 'Flask', category: 'Frameworks/Libraries', icon: <SiFlask className="text-gray-400" /> },
  { name: 'Bootstrap', category: 'Frameworks/Libraries', icon: <SiBootstrap className="text-purple-500" /> },
  { name: 'Tailwind CSS', category: 'Frameworks/Libraries', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', category: 'Frameworks/Libraries', icon: <FaNodeJs className="text-green-500" /> },

  // --- Databases ---
  { name: 'PostgreSQL', category: 'Databases', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'SQLite', category: 'Databases', icon: <SiSqlite className="text-blue-400" /> },
  { name: 'MongoDB', category: 'Databases', icon: <SiMongodb className="text-green-400" /> },

  // --- Cloud Platforms & Software Development Tools ---
  { name: 'AWS', category: 'Tools', icon: <FaAws className="text-orange-500" /> },
  { name: 'Azure', category: 'Tools', icon: <FaAws className="text-orange-500" /> },
  { name: 'GitHub', category: 'Tools', icon: <SiGithub className="text-gray-300" /> },
  { name: 'Git', category: 'Tools', icon: <FaGitAlt className="text-orange-500" /> },
  { name: 'VS Code', category: 'Tools', icon: <SiVsco className="text-blue-400" /> },
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
    // Applied the styling similar to your About section
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Technical Skills</h2>
        
        {Object.entries(groupedSkills).map(([category, skillList]) => (
          <div key={category} className="mb-8">
            {/* Styled category headers to match the 'teal' accent color */}
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 text-teal-400">
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {skillList.map((skill) => (
                <div
                  key={skill.name}
                  // Styled individual skill badges to fit the dark theme
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  {skill.icon && <span className="text-3xl">{skill.icon}</span>}
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCategorized;
