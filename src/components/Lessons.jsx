import React from "react";
import { servicesContent } from "../mockData/servicesContent.js";
import LessonCard from "./Helpers/LessonCard";
import QuoteCard from "./Helpers/QuoteCard";

const Lessons = () => {
  return (
    <section className="relative py-20 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Choose the right type of lesson for you
          </h2>
          <p>
            Every student is different. Lessons are designed around your level,
            objectives, and preferred learning style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.map((service, index) => (
            <LessonCard
              key={index}
              title={service.title}
              text={service.text}
              icon={service.Icon}
            />
          ))}
        </div>
      </div>{" "}
      <div className="pt-10 text-center space-y-5">
        <QuoteCard text="Get ahead of others. Accelerate your learning with a professional." />
      </div>
    </section>
  );
};

export default Lessons;
