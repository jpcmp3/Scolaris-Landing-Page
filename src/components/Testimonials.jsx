import React from "react";
import TestimonialCard from "./Helpers/TestimonialCard";
const testimonials = [
  {
    id: 1,
    name: "David Miller",
    role: "High School Student",
    avatar: "https://i.pravatar.cc/150?img=32",
    verified: true,
    rating: 5,
    quote:
      "The lessons are engaging and easy to follow. My grades have improved significantly!",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Computer Science Student",
    avatar: "https://i.pravatar.cc/150?img=12",
    verified: true,
    rating: 5,
    quote:
      "I finally understand concepts that confused me for years. The explanations are clear and practical.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "University Student",
    avatar: "https://i.pravatar.cc/150?img=47",
    verified: true,
    rating: 4,
    quote:
      "The tutors are patient and knowledgeable. I feel much more confident tackling difficult subjects now.",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Professional Learner",
    avatar: "https://i.pravatar.cc/150?img=65",
    verified: false,
    rating: 5,
    quote:
      "Flexible scheduling and personalized lessons make it so easy to fit learning into my busy life.",
  },
  {
    id: 5,
    name: "Sophia Garcia",
    role: "High School Student",
    avatar: "https://i.pravatar.cc/150?img=23",
    verified: true,
    rating: 4,
    quote:
      "I love the interactive approach. Lessons are never boring, and I actually enjoy studying now!",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "College Student",
    avatar: "https://i.pravatar.cc/150?img=51",
    verified: true,
    rating: 5,
    quote:
      "The teaching style is excellent. Complex topics are broken down so that anyone can understand.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-center mb-15">
          Hear what other students think
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
