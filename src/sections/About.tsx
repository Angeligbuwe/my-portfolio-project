
export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative bg-gray-950 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="items-center rounded-3xl p-8 border border-white/10 backdrop-blur-md 
        shadow-[0_0_40px_rgba(236,72,153,0.4)] animate-fade-in transition duration-500 
        hover:border-pink-400/40 hover:scale-[1.02]">
        
          <div>
            {/* TITLE + SUBTITLE */}
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-pink-400">Me</span>
              </h2>

              <div className="w-20 h-1 bg-pink-400 rounded-full mx-auto lg:mx-0 mb-5"></div>

              <p className="text-gray-400 text-lg text-center">
                A little bit about my journey into tech
              </p>
            </div>

            {/* CONTENT CARD */}
            <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 
            backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.15)] animate-fade-in animation-delay-200">
              <p className="text-gray-300 leading-relaxed mb-4">
                I’m a motivated web development student with a growing foundation
                in frontend development and UX/UI design. I completed the ICDD
                program at ReDI School and an IT course, where I developed
                practical skills in building modern web applications.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4 text-center">
                My background in Applied Microbiology and Agricultural Economics
                has helped me build strong analytical and problem solving skills.
                I enjoy creating clean, user-friendly interfaces and bringing
                ideas to life through design and code.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4 text-center">
               I'm continuously learning and expanding my skills in frontend development,
               UI design, and modern web technologies while building real-world projects.
              </p>

              <p className="text-gray-300 mt-4 text-center max-w-xl mx-auto glass glow-animate 
               rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                “My goal is to build simple, user-friendly web applications that
                solve real problems. I’m focused on growing as a frontend
                developer while creating experiences that are both functional and
                visually engaging.”
              </p>


            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVE PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full animate-pulse glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};