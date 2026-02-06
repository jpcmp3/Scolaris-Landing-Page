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
      <section className="flex flex-col items-center justify-center px-4 pt-5 pb-15">
        <div className="mt-6 grid w-full max-w-3xl grid-cols-[1fr_auto_1fr] items-center">
          {/* Empty spacer (left) */}
          <div />

          {/* Centered toggle */}
          <div className="flex justify-center">
            <div className="flex bg-zinc-100 p-1.5 rounded-full border">
              {[
                { label: "One time", value: false },
                { label: "Package", value: true },
              ].map(({ label, value }) => (
                <button
                  key={label}
                  onClick={() => setIsPackage(value)}
                  className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${
                    isPackage === value
                      ? "bg-zinc-800 hover:bg-zinc-900 text-white"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Right text */}
          <span className="justify-self-end -translate-x-43 whitespace-nowrap text-sm font-medium text-zinc-700 bg-green-300 px-2 py-1 rounded-full">
            Save up to <span className="font-semibold">15%</span>
          </span>
        </div>
        {/* Cards */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((item, index) => {
            const duration = durations[item.id];
            const price =
              item.prices[isPackage ? "package" : "single"][duration];

            return (
              <div
                key={item.id}
                className={`
              border border-zinc-500 rounded-2xl p-6 max-w-md
              flex flex-col items-start
              transition duration-300 hover:-translate-y-1
              bg-indigo-300
              ${index !== 1 ? "lg:translate-y-10" : ""}
            `}
              >
                {/* Title */}
                <h3 className="mt-1 text-3xl font-medium ">{item.name}</h3>

                <p className="mt-2 text-sm text-zinc-700">{item.description}</p>

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
                <h3 className="mt-6 text-5xl font-medium">${price}</h3>

                <button
                  className="w-full mt-8 px-4 py-3 rounded-full text-sm font-semibold
                bg-gray-800 hover:bg-gray-900 text-white"
                >
                  Book Class
                </button>

                {/* Features */}
                <div className="w-full mt-8 space-y-2.5 pb-4">
                  {item.features.map((feature, i) => (
                    <p key={i} className="flex items-center gap-3 text-sm ">
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
