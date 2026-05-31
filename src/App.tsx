import { Contact } from "./sections/Contact";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import {Resume} from "./sections/Resume";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { AISection } from "./sections/AISection";
import { GitHubProjects } from "./sections/GitHubProjects";
import {Testimonials} from "./sections/Testimonials";
import { Footer } from "./sections/Footer";

function App() {


  return (
    <div
  className="min-h-screen bg-gray-100 text-black">
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <AISection />
        <GitHubProjects />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App








