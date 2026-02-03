import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-black/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyanThm/10 border border-cyanThm/10 hover:border-cyanThm/30 group animate-on-scroll scale-in flex flex-col h-full">
      {" "}
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBlueThm/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Project Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-whiteThm mb-2 group-hover:text-cyanThm transition-colors">
          {project.title}
        </h3>
        <p className="text-whiteThm/70 text-sm mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-cyanThm/20 text-cyanThm px-2 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>{" "}
        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-greyThm hover:bg-greyThm/80 text-whiteThm px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
              <FaGithub className="text-sm" />
              Code
            </a>
          )}
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyanThm hover:bg-cyanThm/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 bg-greyThm/40 text-whiteThm/40 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed opacity-50">
              <FaExternalLinkAlt className="text-sm" />
              Demo Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    liveLink: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
