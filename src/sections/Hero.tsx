
import heroAngls from "../assets/Angls.jpg";
import { Button } from "../components/Button";
import angelImg from "../assets/Ang1.png";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = [
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", Icon: FaJsSquare, color: "text-yellow-400" },
  { name: "React", Icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
  { name: "Git", Icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", Icon: FaGithub, color: "text-gray-800" },
];

<div className="mt-10 w-full px-4">
  <p className="mb-6 text-center text-gray-300">Tools & Technologies</p>

  <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {skills.map(({ name, Icon, color }) => (
      <div
        key={name}
        className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md transition duration-300 hover:scale-105 hover:border-pink-400/40"
      >
        <Icon className={`text-2xl ${color}`} />
        <span className="font-semibold">{name}</span>
      </div>
    ))}
  </div>
</div>


export const Hero = () => {
    return (
      
    <section 
    id="home"
    className=" relative min-h-screen flex items-center justify-center
     bg-gray-900 text-white overflow-hidden">

      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 
        rounded-full blur-3xl animated-blob"></div>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full 
           blur-3xl animated-blob"></div>

    
      {/* Background image and gradient overlay */}
      <div className="absolute inset-0">

        <img 
        src={heroAngls} 
        alt="Hero Background"
        className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80
        to-background">
        </div>
      </div>


        {/* Moving Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
                key={i} 
                 className="absolute w-8 h-px bg-white/40 animate-moving-line"
              style={{
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}80`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${ 15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
              />
          ))}  
      </div>


          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 pb-20 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

           {/* LEFT COLUMN - TEXT */}
          <div className="space-y-6 text-center lg:text-left">

           

            {/* Headline and description */}
                <div className="space-y-6 relative z-10">
                   <h1 className="text-3xl md:text-6xl font-bold glow-text glow-animate delay-2 animate-fade-in break-words">
                  Hi, I'm <span className="text-pink-400">Angel Osayimwense Igbuwe</span>
               </h1>


            {/* Badge */}
             <div className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,70,153,0.6)]">
             <span className="glass glow-animate inline-flex items-center gap-2 px-4 py-2 
              rounded-full bg-white/20 text-pink-400 text-lg md:text-xl font-bold glow-text 
              delay-1 animate-fade-in">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
               Frontend Developer & UX/UI Enthusiast
               </span>
              </div>


                <p className="text-lg md:text-xl text-gray-300 max-w-xl animate-fade-in-up delay-3">
                Passionate about building modern, user friendly web applications.
                </p>
                </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animated-fade-in animation-delay-300">
              <Button size="md" href="#contact" variant="secondary" mt-6 animate-fade-in-up delay-5>
                Contact Me
              </Button>

            
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-sm text-gray-300">Follow me:</span>

              <a
                href="https://github.com/AngelIgbuwe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition"
                >
                 GitHub
                </a>

              <a
                href="https://www.linkedin.com/in/angel-osayimwense-igbuwe-68a00b307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
               >
                 LinkedIn
                </a>
                </div>
                </div>

              {/* RIGHT COLUMN - PROFILE IMAGE */}
               <div className="relative flex justify-center lg:justify-end w-full">
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400/30 
               via-purple-400/30 to-blue-400/30 animate-pulse blur-2xl"></div>

               <div className="relative rounded-2xl w-[300px] md:w-[380px] border-2 p-2 
               glow border-pink-400/40 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
                 <img
                   src={angelImg}
                  alt="Angel Osayimwense Igbuwe"
                  className="w-full aspect-[4/5] object-cover rounded-full hover:rotate-3
                  hover:scale-105 transition-transform duration-300"
                   />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 glass rounded-xl px-4 py-2 animate-float">
              <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
               <span className="text-sm font-small">Available for work</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  {/* Skills section */}
  <div className="mt-10 w-full px-4">
  <p className="mb-6 text-center text-gray-300">
    Tools & Technologies
  </p>

  <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">

    
  {skills.map(({ name, Icon, color }, index) => (
  <div
    key={name}
    className="float flex items-center justify-center gap-3 
    rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md 
    transition duration-300 hover:scale-105 hover:border-pink-400/40"
    style={{
      animationDelay: `${index * 0.4}s`,
    }}
  >
        <Icon className={`text-2xl ${color}`} />
        <span className="font-semibold">{name}</span>
      </div>
    ))}

  </div>
</div>
</div>
     </section>
  );
};







