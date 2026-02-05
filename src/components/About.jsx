import React from "react";
import { MessageCircle, Users, TrendingUp } from "lucide-react";
import Card from "./Helpers/Card";
import { cardsContent } from "../mockData/cardsContent.js";

const About = () => {
  return (
    <section className="pb-20 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Start your language journey today!
          </h2>
          <p className="mt-4 text-xl">
            with courses specificlly designed for your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cardsContent.map((card) => (
            <Card
              key={card.step}
              step={card.step}
              title={card.title}
              text={card.text}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
