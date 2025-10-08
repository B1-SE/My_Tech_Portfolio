import React from "react";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image?: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
}) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover border-b border-gray-700"
        />
      )}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-teal-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
