import Badge from "./Helpers/Badge";
import CTAbutton from "./Helpers/CTAbutton";
import heroimage from "../assets/video-img.jpg";

// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="pt-56 pb-32 flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text */}
        <div className="flex-col justify-center">
          <Badge>Speed up your learning</Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  leading-tight mb-4">
            1-on-1 Language Lessons with a{" "}
            <span className="text-blue-400">Certified Tutor</span>
          </h1>

          <p className="text-2xl max-w-xl mb-6">
            Lessons designed around your goals and level
          </p>

          {/* CTA */}
          <CTAbutton title="Book a Class" />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-80 bg-white/5 rounded border border-gray/10 overflow-hidden shadow-2xl">
            <img
              src={heroimage}
              alt="heroimage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
