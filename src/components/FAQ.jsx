import React from "react";
import { useState } from "react";
import Accordion from "./Helpers/Accordion";

const faqItems = [
  {
    question: "How long is each lesson?",
    answer: "You can choose between 30-minute and 60-minute lessons.",
  },
  {
    question: "Do you offer lesson packages?",
    answer: "Yes! Packages offer discounted rates and flexible scheduling.",
  },
  {
    question: "Which languages do you teach?",
    answer: "English, French, Arabic, and Japanese.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20  ">
      <h2 className="text-4xl font-medium  text-center">
        Frequently Asked Questions
      </h2>
      <FAQAccordion items={faqContent} />

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-zinc-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-amber-50"
              >
                <span className={`font-medium ${isOpen && "text-green-700"}`}>
                  {item.question}
                </span>
                <span
                  className={`transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 pb-5 ">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
