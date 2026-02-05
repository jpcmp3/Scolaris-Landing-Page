import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Lessons from "./components/Lessons";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <div className="bg-gray-100">
        <Lessons />
      </div>

      <Testimonials />
      <Pricing />

      <FAQ />

      <Footer />
    </>
  );
}

export default App;
