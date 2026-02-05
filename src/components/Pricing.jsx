import React from "react";
import { useState } from "react";

const Pricing = () => {
  const [isPackage, setIsPackage] = useState(false);

  // duration per card (keyed by card id)
  const [durations, setDurations] = useState({
    standard: 60,
    exam: 60,
    professional: 60,
  });

  const pricingData = [
    {
      id: "standard",
      name: "Standard Lessons",
      description: "Adults, children (6–14), and casual learners.",
      prices: {
        single: { 30: 20, 60: 35 },
        package: { 30: 17, 60: 32 },
      },
      features: [
        "Personalized lessons",
        "Flexible scheduling",
        "Optional homework",
      ],
    },
    {
      id: "exam",
      name: "Exam Preparation",
      description: "JLPT, TOEFL, DELF, Cambridge & more.",
      prices: {
        single: { 30: 25, 60: 45 },
        package: { 30: 22, 60: 38 },
      },
      features: [
        "Structured study plan",
        "Practice exams",
        "Targeted feedback",
      ],
    },
    {
      id: "professional",
      name: "Professional & Consulting",
      description: "Business, interviews, proofreading.",
      prices: {
        single: { 30: 30, 60: 55 },
        package: { 30: 26, 60: 49 },
      },
      features: [
        "Business communication",
        "Writing & proofreading",
        "Interview prep",
      ],
    },
  ];

  return (
    <>
      <section className="flex items-center justify-center flex-col py-15 px-4 bg-amber-50">
        {/* Top toggle */}
        <div className="mt-6 flex bg-zinc-100 p-1.5 rounded-full border">
          <button
            onClick={() => setIsPackage(false)}
            className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${
              !isPackage
                ? "bg-zinc-800 hover:bg-zinc-900 text-white"
                : "text-gray-600"
            }`}
          >
            One time
          </button>
          <button
            onClick={() => setIsPackage(true)}
            className={`px-4 py-2 rounded-full text-xs cursor-pointer ${
              isPackage
                ? "bg-zinc-800 hover:bg-zinc-900 text-white"
                : "text-gray-600"
            }`}
          >
            Package
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((item) => {
            const duration = durations[item.id];
            const price =
              item.prices[isPackage ? "package" : "single"][duration];

            return (
              <div
                key={item.id}
                className="border border-zinc-500 rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 bg-amber-100"
              >
                <h1 className="font-medium text-3xl text-slate-800 mt-1">
                  {item.name}
                </h1>

                <p className="text-sm text-zinc-700 mt-2">{item.description}</p>

                {/* Duration toggle */}
                <div className="mt-5 flex bg-zinc-100 p-1 rounded-full border">
                  {[30, 60].map((min) => (
                    <button
                      key={min}
                      onClick={() =>
                        setDurations((prev) => ({
                          ...prev,
                          [item.id]: min,
                        }))
                      }
                      className={`px-4 py-1.5 rounded-full text-xs transition ${
                        duration === min
                          ? "bg-zinc-800 text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {min} min
                    </button>
                  ))}
                </div>

                {/* Price */}
                <h1 className="font-medium text-5xl  mt-6">${price}</h1>

                <button
                  className="w-full px-4 py-3 rounded-full cursor-pointer text-sm mt-8 
                    bg-gray-800 hover:bg-gray-900 text-white font-semibold"
                >
                  Book Class
                </button>

                <div className="w-full mt-8 space-y-2.5 pb-4">
                  {item.features.map((feature, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-3 text-sm text-zinc-500"
                    >
                      <span className="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0">
                        <span className="size-1.5 rounded-full bg-zinc-800" />
                      </span>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;
