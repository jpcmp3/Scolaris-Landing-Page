import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Lessons from "./components/Lessons";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="relative bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-900">
        <Hero />
        <About />
      </section>

      <Lessons />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
