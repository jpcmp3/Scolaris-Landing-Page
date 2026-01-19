import React from "react";
import { servicesContent } from "../mockData/servicesContent";
import ServiceCard from "./Helpers/ServiceCard";

const Lessons = () => {
  return (
    <section className="relative py-24 bg-amber-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold  sm:text-4xl">
            Choose the right type of lesson for you
          </h2>
          <p className="">
            Every student is different. Lessons are designed around your level,
            objectives, and preferred learning style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;
