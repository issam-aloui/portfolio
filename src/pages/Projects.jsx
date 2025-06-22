import { useState } from "react";
import Button from "../components/button";
import EnhancedProjectCard from "../components/EnhancedProjectCard";
import { projectsData } from "../data/projectsData";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const currentProjects = projectsData[activeCategory] || [];
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-greyThm/10 to-darkBlueThm py-12 sm:py-16 md:py-20"
      id="Projects">
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            My Recent <span className="text-cyanThm">Works</span>
          </h2>
          <p className="text-whiteThm/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Here are some of my recent projects that showcase my skills in web
            development, problem-solving, and attention to detail. Each project
            represents a unique challenge and learning experience.
          </p>{" "}
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            {[
              { key: "all", label: "All Projects" },
              { key: "web", label: "Web Apps" },
              { key: "mobile", label: "Cyber Security" },
            ].map(({ key, label }) => (
              <Button
                key={key}
                Text={label}
                onClick={() => handleCategoryChange(key)}
                bgColor={activeCategory === key ? 1 : 0}
                id={key}
              />
            ))}
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {currentProjects.map((project) => (
            <EnhancedProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* No Projects Message */}
        {currentProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-whiteThm mb-2">
              Coming Soon
            </h3>
            <p className="text-whiteThm/70">
              More amazing projects are currently in development!
            </p>
          </div>
        )}{" "}
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-cyanThm/10 via-greyThm/20 to-cyanThm/5 rounded-2xl p-8 backdrop-blur-sm border-2 border-cyanThm/30 shadow-lg shadow-cyanThm/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyanThm/60 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-cyanThm/40 to-transparent"></div>

            <h3 className="text-3xl font-bold text-whiteThm mb-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-cyanThm rounded-full animate-pulse"></div>
              Interested in Working Together?
              <div className="w-2 h-2 bg-cyanThm rounded-full animate-pulse delay-300"></div>
            </h3>
            <p className="text-whiteThm/70 text-lg mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate
              on interesting projects. Let&apos;s create something amazing
              together!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#Contact"
                className="bg-cyanThm hover:bg-cyanThm/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Get In Touch
              </a>{" "}
              <a
                href="https://github.com/issam-aloui"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyanThm text-cyanThm hover:bg-cyanThm hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
