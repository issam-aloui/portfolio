import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="min-h-screen bg-black/20 backdrop-blur-sm py-12 sm:py-16 md:py-20 relative"
      id="Contact">
      <div className="container mx-auto px-4 sm:px-6 relative z-0">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-on-scroll fade-in-down animate-visible">
            Get In <span className="text-cyanThm">Touch</span>
          </h2>
          <p className="text-whiteThm/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed animate-on-scroll fade-in-up animate-visible stagger-1">
            I&apos;m always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello, feel
            free to reach out!
          </p>
        </div>{" "}
        <div className="max-w-6xl mx-auto animate-on-scroll scale-in animate-visible stagger-2">
          {/* Single Contact Section */}
          <div className="bg-gradient-to-br from-cyanThm/5 via-black/30 to-purple-500/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-cyanThm/20 shadow-2xl shadow-cyanThm/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyanThm/60 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-l from-purple-500/40 via-cyanThm/40 to-transparent"></div>

            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-whiteThm mb-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-cyanThm rounded-full animate-pulse"></div>
                Let&apos;s Connect
                <div className="w-2 h-2 bg-cyanThm rounded-full animate-pulse delay-300"></div>
              </h3>
              <p className="text-whiteThm/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Ready to collaborate? Choose your preferred way to connect and
                let&apos;s start building something amazing together!
              </p>
            </div>

            {/* Grid Layout for all contact options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              {/* Email */}
              <a
                href="mailto:issameddinealoui@gmail.com"
                className="flex flex-col items-center text-center p-6 bg-cyanThm/20 hover:bg-cyanThm/30 text-cyanThm rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-cyanThm/40 animate-on-scroll fade-in-up animate-visible stagger-3">
                <FaEnvelope className="text-3xl mb-4" />
                <h4 className="font-semibold text-base mb-2">Email</h4>
                <p className="text-sm text-whiteThm/70 mb-1">
                  issameddinealoui@gmail.com
                </p>
                <p className="text-xs text-whiteThm/60">Direct communication</p>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aloui-issam-eddine/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-blue-500/40 animate-on-scroll fade-in-up animate-visible stagger-4">
                <FaLinkedin className="text-3xl mb-4" />
                <h4 className="font-semibold text-base mb-2">LinkedIn</h4>
                <p className="text-sm text-whiteThm/70 mb-1">
                  Professional Network
                </p>
                <p className="text-xs text-whiteThm/60">
                  Connect & collaborate
                </p>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/issam-aloui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 bg-gray-500/20 hover:bg-gray-500/30 text-gray-400 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-500/40 animate-on-scroll fade-in-up animate-visible stagger-5">
                <FaGithub className="text-3xl mb-4" />
                <h4 className="font-semibold text-base mb-2">GitHub</h4>
                <p className="text-sm text-whiteThm/70 mb-1">View My Code</p>
                <p className="text-xs text-whiteThm/60">Explore repositories</p>
              </a>
              {/* Status */}
              <div className="flex flex-col items-center text-center p-6 bg-green-500/20 rounded-lg border border-green-500/40 relative overflow-hidden animate-on-scroll fade-in-up animate-visible stagger-6">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-green-500/40 to-transparent"></div>

                <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-green-400 font-semibold text-base mb-2">
                  Available
                </h4>
                <p className="text-sm text-whiteThm/70 mb-1">
                  Open to opportunities
                </p>
                <p className="text-xs text-green-400 font-medium">
                  Response &lt; 24hrs 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
