import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const mainLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  const mainUrls = ["#Home", "#About", "#Skills", "#Projects", "#Contact"];
  const mainIcons = [
    <FaHome key="home" />,
    <FaUser key="about" />,
    <FaCogs key="skills" />,
    <FaProjectDiagram key="projects" />,
    <FaEnvelope key="contact" />,
  ];
  const socialUrls = [
    "https://www.linkedin.com/in/aloui-issam-eddine/",
    "https://github.com/issam-aloui",
  ];
  const socialIcons = [
    <FaLinkedin key="linkedin" />,
    <FaGithub key="github" />,
  ];
  return (
    <footer className="bg-greyThm/30 backdrop-blur-sm py-8 sm:py-12 px-4 sm:px-6 border-t border-greyThm/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-whiteThm mb-3 sm:mb-4">
              Issam Aloui
            </h3>
            <p className="text-whiteThm/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl">
              Passionate web developer and cyber security enthusiast creating
              beautiful and secure web experiences. Focused on modern web
              technologies and security best practices. Let&apos;s build
              something amazing together!
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start mb-6">
              {socialIcons.map((icon, index) => (
                <a
                  key={socialUrls[index]}
                  href={socialUrls[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-greyThm/50 p-3 rounded-full text-whiteThm hover:text-cyanThm hover:bg-greyThm/70 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyanThm/20"
                  aria-label={`Social link ${index + 1}`}>
                  {icon}
                </a>
              ))}
            </div>
            {/* Contact info integrated into brand section */}{" "}
            <div className="text-center md:text-left border-t border-greyThm/20 pt-4">
              <p className="text-whiteThm/60 text-sm">
                <a
                  href="mailto:issameddinealoui@gmail.com"
                  className="hover:text-cyanThm transition-colors inline-flex items-center gap-2">
                  <FaEnvelope className="text-xs" />
                  issameddinealoui@gmail.com
                </a>
              </p>
              <p className="text-whiteThm/60 text-sm mt-1 flex items-center justify-center md:justify-start gap-2">
                <span className="w-1 h-1 bg-cyanThm rounded-full"></span>
                Algeria
              </p>
              <p className="text-whiteThm/50 text-xs mt-2">
                Available for freelance work, collaboration and internships.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-whiteThm mb-4 sm:mb-6 flex items-center justify-center md:justify-start gap-2">
              <div className="w-1 h-4 bg-cyanThm rounded-full"></div>
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-3 flex flex-col items-center md:items-start">
                {mainLinks.map((text, index) => (
                  <li key={mainUrls[index]}>
                    <a
                      href={mainUrls[index]}
                      className="flex items-center gap-3 text-whiteThm/70 hover:text-cyanThm transition-all duration-300 text-sm sm:text-base hover:translate-x-1 group">
                      <span className="text-cyanThm/60 group-hover:text-cyanThm transition-colors">
                        {mainIcons[index]}
                      </span>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>{" "}
        {/* Bottom Section */}
        <div className="pt-6 border-t border-greyThm/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-whiteThm/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Issam Aloui. All rights reserved.
            </p>
            <p className="text-whiteThm/50 text-xs text-center md:text-right">
              Design inspiration from{" "}
              <a
                href="https://www.figma.com/community/file/1175755450846438274/portfolio-website-design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyanThm/70 hover:text-cyanThm transition-colors">
                Figma Community
              </a>{" "}
              (changes were made)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
