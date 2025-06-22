import lightbulb from "../assets/lightbulb.svg";
import vector141 from "../assets/Vector141.svg";
import vector186 from "../assets/Vector186 (1).svg";
import doodleItems from "../assets/doodleitems.svg";
import group62 from "../assets/Group62.svg";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-darkBlueThm" id="About">
      <div className="container flex flex-col lg:flex-row items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        {/* Left Section */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center relative order-2 lg:order-1">
          {/* Decorative SVGs - responsive sizing and positioning */}
          <img
            src={lightbulb}
            alt=""
            className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 opacity-30 sm:opacity-50"
          />
          <img
            src={vector141}
            alt=""
            className="absolute bottom-0 left-0 w-10 sm:w-12 md:w-16 opacity-30 sm:opacity-50"
          />
          <img
            src={vector186}
            alt=""
            className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-24 sm:w-32 md:w-36 opacity-15 sm:opacity-20"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-center lg:text-left">
            About <span className="text-cyanThm">me</span>
          </h1>{" "}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-center lg:text-left">
            {" "}
            <p className="text-whiteThm/90 leading-relaxed text-base sm:text-lg font-poppins">
              👋 Hi! I&apos;m{" "}
              <span className="text-cyanThm font-semibold">Issam Aloui</span>, a
              passionate Computer Science student from Algeria with expertise in
              web development and a growing interest in cyber security.
            </p>
            <p className="text-whiteThm/80 leading-relaxed text-sm sm:text-base font-poppins">
              My journey spans creating beautiful, functional web experiences
              while understanding the critical importance of secure coding
              practices. I enjoy transforming creative designs into responsive,
              secure web applications that users love and trust.
            </p>{" "}
            <p className="text-whiteThm/80 leading-relaxed text-sm sm:text-base font-poppins">
              Beyond coding, I&apos;m fascinated by cybersecurity principles,
              ethical hacking, and building secure applications. I believe in
              creating digital experiences that are not only beautiful but also
              safe and secure for users. I believe that great software is built
              through continuous learning, collaboration, and attention to
              detail.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-cyanThm/20 text-cyanThm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                🎓 Computer Science Student
              </div>{" "}
              <div className="bg-cyanThm/20 text-cyanThm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                💻 Web Developer
              </div>
              <div className="bg-cyanThm/20 text-cyanThm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                🔒 Cyber Security Enthusiast
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              className="bg-cyanThm hover:bg-cyanThm/90 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center text-sm sm:text-base"
              href="https://www.linkedin.com/in/aloui-issam-eddine/"
              target="_blank"
              rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
            <a
              className="border-2 border-cyanThm text-cyanThm hover:bg-cyanThm hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base"
              href="#Contact">
              Get in Touch
            </a>
          </div>
        </div>{" "}
        {/* Right Section - enhanced mobile responsiveness */}
        <div className="flex-1 relative flex items-center justify-center p-4 sm:p-6 md:p-8 order-1 lg:order-2 mb-6 lg:mb-0">
          <img
            src={doodleItems}
            alt="Doodle elements"
            className="absolute inset-0 w-full h-full opacity-20 sm:opacity-30 z-0 object-contain"
          />
          {/* Main image container - responsive sizing */}
          <div className="relative w-3/4 sm:w-4/5 max-w-[300px] sm:max-w-[400px] lg:max-w-none">
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[85%] sm:w-[90%] h-6 sm:h-8 md:h-10 bg-black/30 sm:bg-black/40 blur-lg sm:blur-xl rounded-[50%]"></div>
            <img
              src={group62}
              alt="Person at desk"
              className="relative z-10 w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
