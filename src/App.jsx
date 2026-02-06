import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Lessons from "./components/Lessons";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Teacher from "./components/Teacher";
import GG from "./components/GG";

import FAQ from "./components/FAQ";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-purple-100  to-indigo-100">
        <Hero />
        <About />
      </div>

      <Lessons />
      <Teacher />
      <Testimonials />

      <Pricing />

      <FAQ />

      <Quote />
    </>
  );
}

export default App;
