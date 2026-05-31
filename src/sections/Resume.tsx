import angelImg from "../assets/Ang1.png";

export const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-pink-400/20 bg-white/5 p-8 text-center 
        shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-700 hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]">
          <div className="mx-auto mb-10 w-full max-w-sm overflow-hidden rounded-3xl border 
          border-pink-400/20 bg-black/30 p-3 shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-700 
          hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]">
            <img
              src={angelImg}
              alt="Angel Osayimwense Igbuwe"
              className="w-full object-cover rounded-2xl hover:rotate-3 
                hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            My <span className="text-pink-400">Resume</span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg text-gray-300">
            You can view or download my resume below.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/Angel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pink-400 px-8 py-4 font-semibold text-pink-300 transition hover:bg-pink-400 hover:text-white"
            >
              View Resume
            </a>

            <a
              href="/Angel_Resume.pdf"
              download
              className="rounded-full bg-gradient-to-r from-blue-600 to-pink-500 px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};