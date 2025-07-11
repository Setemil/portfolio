import Languages from "./components/languageBar";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import "./assets/styles/App.css";


// Main App Component
function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;
