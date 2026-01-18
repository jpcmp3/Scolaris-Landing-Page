import Badge from "./Helpers/Badge";
import CTAbutton from "./Helpers/CTAbutton";

// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      {/* Animated background */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(-45deg,#ee7752,#e73c7e,#f9ac55,#23d5ab,#ee7752,#e73c7e,#f9ac55,#23d5ab)]
               bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[18%]
               bg-gradient-to-t from-white to-transparent
               pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text */}
        <div className="text-white flex-col justify-center">
          <Badge>Speed up your learning</Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  leading-tight mb-4">
            1 on 1 Language Lessons with a{" "}
            <span className="text-indigo-900">Certified Tutor</span>
          </h1>

          <p className="text-xl max-w-xl mb-8">
            Lessons designed around your goals and level
          </p>

          {/* CTA */}
          <CTAbutton />
        </div>

        {/* Right: Visual (placeholder) */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-80 bg-white/5 rounded-2xl border border-gray/10" />
        </div>
      </div>
    </section>
  );
}
