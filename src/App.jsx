import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technology from "./components/Technology";



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-1] h-full w-full">
        <div className="absolute top-0 left-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="relative min-h-screen container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technology/>
        <Project/>
        <Footer/>
      
      </div>
    </div>
  );
}

export default App;
