import React from "react";
import { cardsContent } from "../mockData/cardsContent";
import { MessageCircle, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How the Lessons Work
          </h2>
          <p className="mt-4 text-gray-600">
            Simple, effective, and focused on your goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cardsContent.map((item) => (
            <div
              key={item.step}
              className="group relative rounded-3xl border border-white/20 p-10 text-center transition-all duration-300 hover:bg-lime-300 hover:border-lime-300"
            >
              {/* Step number */}
              <span className="block text-2xl font-semibold mb-4 transition-colors group-hover:text-black">
                {item.step}
              </span>

              {/* Icon */}
              <div
                className="
        mx-auto mb-6 flex h-40 w-40 items-center justify-center
        rounded-full border  bg-white/10
        transition-all duration-300
        group-hover:bg-white group-hover:border-black
      "
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-16 transition-transform group-hover:-translate-y-1"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-xl font-semibold mb-4 transition-colors group-hover:text-black">
                {item.title}
              </h3>

              {/* Text */}
              <p className=" transition-colors group-hover:text-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
