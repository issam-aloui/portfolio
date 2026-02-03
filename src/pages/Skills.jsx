import SkillCard from "../components/SkillCard";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiC,
  SiOpenjdk,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    // Backend Technologies
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description:
        "Server-side JavaScript development, API creation, and backend application architecture.",
      level: 70,
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
      description:
        "NoSQL database design, query optimization, and data modeling for modern applications.",
      level: 60,
    },
    {
      icon: <SiExpress />,
      title: "Express.js",
      description:
        "Building RESTful APIs and web applications with Node.js web application framework.",
      level: 65,
    },
    // Frontend Technologies
    {
      icon: <FaReact />,
      title: "React.js",
      description:
        "Building dynamic and interactive user interfaces with modern React patterns, hooks, and state management.",
      level: 85,
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      description:
        "Rapid UI development with utility-first CSS framework for consistent and maintainable designs.",
      level: 80,
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      description:
        "Proficient in ES6+ features, async/await, DOM manipulation, and modern JavaScript development practices.",
      level: 90,
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description:
        "Semantic markup, accessibility best practices, and modern HTML5 APIs for robust web applications.",
      level: 95,
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description:
        "Advanced styling, animations, grid, flexbox, and responsive design techniques.",
      level: 90,
    },
    // Other Technologies
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      description:
        "Version control, collaborative development, and project management with Git workflows.",
      level: 85,
    },
    {
      icon: <SiC />,
      title: "C",
      description:
        "Systems programming, memory management, and understanding low-level computer operations.",
      level: 45,
    },
    {
      icon: <SiOpenjdk />,
      title: "Java",
      description:
        "Object-oriented programming, data structures, and basic application development.",
      level: 55,
    },
  ];
  return (
    <section
      className="min-h-screen bg-black/20 backdrop-blur-sm py-12 sm:py-16 md:py-20 relative"
      id="Skills">
      <div className="container mx-auto px-4 sm:px-6 relative z-0">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-on-scroll fade-in-down animate-visible">
            My <span className="text-cyanThm">Skills</span>
          </h2>{" "}
          <p className="text-whiteThm/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed animate-on-scroll fade-in-up animate-visible stagger-1">
            A comprehensive overview of my technical expertise and proficiency
            levels. I&apos;m constantly learning and improving these skills
            through practical projects and continuous study.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div key={skill.title} className={`stagger-${Math.min(index % 8 + 1, 8)}`}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                level={skill.level}
              />
            </div>
          ))}
        </div>{" "}
        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center animate-on-scroll fade-in-up animate-visible stagger-8">
          <div className="bg-gradient-to-br from-cyanThm/10 via-greyThm/20 to-cyanThm/5 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border-2 border-cyanThm/30 shadow-lg shadow-cyanThm/10 relative overflow-hidden hover:border-cyanThm/50 hover:shadow-cyanThm/20 transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyanThm/60 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-cyanThm/40 to-transparent"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-whiteThm mb-3 sm:mb-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-cyanThm rounded-full animate-pulse"></div>
              Currently Learning
              <div className="w-2 h-2 bg-cyanThm rounded-full animate-pulse delay-300"></div>
            </h3>
            <p className="text-whiteThm/70 text-sm sm:text-base md:text-lg">
              Python for automation and scripting, TypeScript for type-safe
              JavaScript development, and beginner-level cyber security
              fundamentals including ethical hacking principles and secure
              coding practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
